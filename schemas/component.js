/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const {
    optional,
    object,
    anyOf,
    string,
    compose,
    ref,
} = require('openapi-typescript-validator');

const types = {};

types.ComponentBase = object({
    id: string(),
    action: optional(ref('Action')),
    searchable: optional(string()),
});

types.ComponentExample = compose(
    types.ComponentBase,
    object({
        content: string(),
    }),
);

types.Component = anyOf([
    'ComponentExample',
]);

module.exports.types = types;
