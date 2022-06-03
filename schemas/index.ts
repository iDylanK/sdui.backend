// import path from 'path';
// import {generateProject} from '../packages/sdui/lib'

// generateProject(path.join(__dirname, '/component.js'), path.join(__dirname, '../generated'));

const component = require('./component');

module.exports.types = component.types;




import path from 'path';
import { generate } from '../packages/openapi-typescript-validator';
import { GenerateOptions } from '../packages/openapi-typescript-validator/dist/GenerateOptions';
import fs from 'fs';


console.log("test");

const prettier = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../.prettierrc'), 'utf-8'));
const prettierOptions = {
    parser: 'typescript',
    ...prettier,
};

const baseOptions: Omit<GenerateOptions, 'schemaFile' | 'directory'> = {
    skipSchemaFile: true,
    skipMetaFile: true,
    standalone: {
        mergeDecoders: false,
        validatorOutput: 'commonjs',
    },
    prettierOptions,
    schemaType: 'custom',
};

generate({
    ...baseOptions,
    schemaFile: path.join(__dirname, 'component.js'),
    directory: path.join(__dirname, 'generated'),
    skipSchemaFile: false,
    skipMetaFile: false,
}).catch((error) => {
    console.error(error);
    process.exit(1);
});

export function generateProject(schemaFile: string, directory: string) {
    generate({
        ...baseOptions,
        schemaFile,
        directory,
        skipSchemaFile: false,
        skipMetaFile: false,
    }).catch((error) => {
        console.error(error);
        process.exit(1);
    });
}
