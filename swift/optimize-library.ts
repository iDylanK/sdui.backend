import { readFileSync, writeFileSync } from 'fs';

const modelsFilePath = process.argv[2];

let fileContents = readFileSync(modelsFilePath, 'utf-8');

// We filter out any genereted combined structs which are a result of the anyOf
// types being merged to 1 struct
fileContents = fileContents.replace(/^public struct \w+Class:.*?(?=^public)/gms, '\n\n');

// we remove the ApiSchema struct
// fileContents = fileContents.replace(/^public struct SDUISchema:.*?(?=^public)/gms, '\n\n');

// We remove the comments which are useless
// fileContents = fileContents.replace(/^\/\/.*/gm, '');

// Note: all anyOf models should be filtered by hand and be manually created
const modelsToFilters = [
    'SDUISchema',
    'SDUIComponent',
    'SDUIHeader',
    'SDUIComponentBase',
    'SDUIHeaderBase',
    'SDUIAction',
];

// remove certain models
modelsToFilters.forEach((model) => {
    console.info(`Removing ${model} from generated models`);
    const regex = new RegExp(`^public (struct|class|enum) ${model}:.*?(?=^public)`, 'gms');
    fileContents = fileContents.replace(regex, '\n');
});

// White lines?
// fileContents = fileContents.replace(/^\s*[\r\n]/gm, '');

writeFileSync(modelsFilePath, fileContents, 'utf-8');

console.info('Done!');
