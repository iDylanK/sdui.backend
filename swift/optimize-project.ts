import { readFileSync, writeFileSync } from 'fs';
import { rootFile } from '../lib/utils';
import { generateComponent } from './component';
import { filterModel } from './filter';

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
    'SDUIHeader',
    'SDUIComponentBase',
    'SDUIHeaderBase',
    ...libraryTypes,
];

// Remove certain models
// TODO: Does not remove the last one because of the regex.
modelsToFilters.forEach((model) => {
    console.info(`Removing ${model} from generated models`);
    fileContents = filterModel(fileContents, model, model.toLowerCase() !== 'sduicomponent' && model.toLowerCase() !== 'sduiaction');
});

fileContents += generateComponent(schema);

writeFileSync(modelsFilePath, fileContents, 'utf-8');

console.info('Done!');
