import { readFileSync, writeFileSync } from 'fs';
import { rootFile } from '../lib/utils';

const modelsFilePath = process.argv[2];
const schema = process.argv[3];

let fileContents = readFileSync(modelsFilePath, 'utf-8');

// We filter out any genereted combined structs which are a result of the anyOf
// types being merged to 1 struct
fileContents = fileContents.replace(/^public struct \w+Class:.*?(?=^public)/gms, '\n\n');

fileContents = fileContents.replace(/^import Foundation/gms, 'import Foundation\nimport SDUI\n');

// We remove the comments which are useless
// fileContents = fileContents.replace(/^\/\/.*/gm, '');

let libraryTypes = Object.keys(JSON.parse(readFileSync(rootFile('generated/schema.json'), 'utf-8')).definitions);
libraryTypes = libraryTypes.map((x) => `SDUI${x}`);

// Note: all anyOf models should be filtered by hand and be manually created
const modelsToFilters = [
    'SDUISchema',
    'SDUIComponent',
    'SDUIHeader',
    'SDUIComponentBase',
    'SDUIHeaderBase',
    ...libraryTypes,
];

// remove certain models
modelsToFilters.forEach((model) => {
    console.info(`Removing ${model} from generated models`);
    const regex = new RegExp(`^public (struct|class|enum) ${model}:.*?(?=^public)`, 'gms');
    fileContents = fileContents.replace(regex, '\n');

    // TODO: does not remove the last one....
    // TODO: should not remove ComponentType..
    // const regexType =
    //      new RegExp(`^public (struct|class|enum) ${model}Type:.*?(?=^public)`, 'gms');
    // fileContents = fileContents.replace(regexType, '\n');
});

// TODO: move to own File
let componentTypes = JSON.parse(readFileSync(schema, 'utf-8')).definitions.Component.anyOf.map((component: any) => component.$ref.replace('#/definitions/', ''));

componentTypes = componentTypes.map((component: any) => {
    const c = component.replace('Component', '');
    return [
        component, c.charAt(0).toLowerCase() + c.slice(1),
    ];
});

componentTypes = componentTypes.filter((component: [string, string]) => component[1] !== 'example'); // TODO: current example solution. Removing example from the library framework causes the anyOf to brake.

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

writeFileSync(modelsFilePath, fileContents, 'utf-8');

console.info('Done!');
