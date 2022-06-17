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

types.BaseComponent = object({
    id: string(),
    action: optional(ref('Action')),
    searchable: optional(string()),
});

types.ExampleComponent = compose(
    types.BaseComponent,
    object({
        content: string(),
    }),
);

types.Component = anyOf([
    'ExampleComponent',
]);

module.exports.types = types;
