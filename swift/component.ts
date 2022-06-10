import { readFileSync } from 'fs';

export function generateComponent(schema: string) {
    let fileContents = '';
    let componentTypes = JSON.parse(readFileSync(schema, 'utf-8')).definitions.Component.anyOf.map((component: any) => component.$ref.replace('#/definitions/', ''));

    componentTypes = componentTypes.map((component: any) => {
        const c = component.replace('Component', '');
        return [
            component, c.charAt(0).toLowerCase() + c.slice(1),
        ];
    });

    // TODO: current example solution.
    // Removing example from the library framework causes the anyOf to brake.
    componentTypes = componentTypes.filter((component: [string, string]) => component[1] !== 'example');

    fileContents += '\npublic enum SDUIComponent: Codable, Equatable {\n';

    componentTypes.forEach((component: [string, string]) => {
        fileContents += `    case ${component[1]}(SDUI${component[0]})\n`;
    });

    fileContents += '    case empty(SDUIEmpty)\n\n';

    fileContents += '    public init(from decoder: Decoder) throws {\n';
    fileContents += '        let type = try SDUIComponentType(rawValue: decoder.decodeType())\n\n';
    fileContents += '        switch type {\n';

    componentTypes.forEach((component: [string, string]) => {
        fileContents += `        case .${component[1]}: self = try .${component[1]}(decoder.decodeSingleValueContainer())\n`;
    });

    fileContents += '        case .none: self = try .empty(decoder.decodeSingleValueContainer())\n';
    fileContents += '        }\n';
    fileContents += '    }\n';
    fileContents += '}\n';

    return fileContents;
}
