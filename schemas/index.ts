import path from 'path';
import { generate } from 'openapi-typescript-validator';
import { GenerateOptions } from 'openapi-typescript-validator/dist/GenerateOptions';
import fs from 'fs';

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
    schemaFile: path.join(__dirname, '/sdui.js'),
    directory: path.join(__dirname, '../api/generated'),
    skipSchemaFile: false,
    skipMetaFile: false,
}).catch((error) => {
    console.error(error);
    process.exit(1);
});
