/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const {
    boolean,
    object,
    anyOf,
    string,
    compose,
} = require('openapi-typescript-validator');

const types = {};

types.HeaderBase = object({
    id: string(),
    scrollable: boolean(),
});

types.HeaderExample = compose(
    types.HeaderBase,
    object({
        content: string(),
    }),
);

types.Header = anyOf([
    'HeaderExample',
]);

module.exports.types = types;
