import { readFileSync } from 'fs';

export function generateCodableEnum(type: string, schema: string, filter: string | null = null) {
    let fileContents = '';

    // TODO: Currently manually removing ExampleComponent and HeaderMain.
    //       These values have to be in the schemas or the anyOf won't work.
    // TODO: Action types are all put in from the library here again.. Works.. But not clean.
    let types = JSON.parse(readFileSync(schema, 'utf-8')).definitions[type].anyOf.map((t: any) => t.$ref.replace('#/definitions/', ''));
    if (filter) types = types.filter((t: string) => t !== filter);

    if (types.length === 0) return '';

    types = types.map((t: any) => {
        const c = t.replace(type, '');
        return [
            t, c.charAt(0).toLowerCase() + c.slice(1),
        ];
    });

    fileContents += `\npublic enum SDUI${type}: Codable, Equatable, Hashable {\n`;

    types.forEach((t: [string, string]) => {
        fileContents += `    case ${t[1]}(SDUI${t[0]})\n`;
    });

    fileContents += '    case empty(SDUIEmpty)\n\n';

    fileContents += '    public init(from decoder: Decoder) throws {\n';
    fileContents += `        let type = try SDUI${type}Type(rawValue: decoder.decodeType())\n\n`;
    fileContents += '        switch type {\n';

    types.forEach((t: [string, string]) => {
        fileContents += `        case .${t[1]}: self = try .${t[1]}(decoder.decodeSingleValueContainer())\n`;
    });

    fileContents += '        default: self = try .empty(decoder.decodeSingleValueContainer())\n';
    fileContents += '        }\n';
    fileContents += '    }\n';
    fileContents += '}\n';

    return fileContents;
}
