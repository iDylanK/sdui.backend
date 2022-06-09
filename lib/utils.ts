import path = require('path');

export function rootFile(file: string) {
    const main = require.main || undefined;
    const mainDir = path.dirname(main ? main.filename : '');
    return path.join(mainDir, `../${file}`);
}
