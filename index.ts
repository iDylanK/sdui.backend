#!/usr/bin/env node

import { spawnSync, SpawnOptions } from 'child_process';
import path = require('path');
import { program } from 'commander';

const spawnOptions: SpawnOptions = {
    cwd: process.cwd(),
    detached: true,
    stdio: 'inherit',
};

function main() {
    program
        .version('1.0.0', '-v, --version');

    program
        .command('schema <source> <destination>')
        .description('Create a json project schema file.')
        .action((source: string, destination: string) => {
            spawnSync('node', [
                path.join(__dirname, 'lib/project.js'),
                path.resolve(process.cwd(), source),
                path.resolve(process.cwd(), destination),
            ], spawnOptions);
        });

    program
        .command('swift <source> <destination>')
        .description('Create a swift class file.')
        .action((source: string, destination: string) => {
            console.log('Swift creator.');
            spawnSync('quicktype', [
                '-s', 'schema', path.resolve(process.cwd(), source),
                '-o', path.resolve(process.cwd(), destination),
                '--coding-keys',
                '--no-initializers',
                '--type-prefix', 'SDUI',
                '--access-level', 'public',
                '--density', 'normal',
                '--protocol', 'hashable',
                '--acronym-style', 'camel',
                '-t', 'Schema',
                '--struct-or-class', 'struct',
                '--swift-5-support',
            ], spawnOptions);
            spawnSync('node', [path.join(__dirname, 'swift/optimize-project.js'), path.resolve(process.cwd(), destination), path.resolve(process.cwd(), source)], spawnOptions);
        });

    program.parse();
}

if (require.main === module) {
    main();
}
