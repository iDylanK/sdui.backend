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
});

types.ExampleComponent = compose(
    types.ComponentBase,
    object({
        content: string(),
    }),
);

types.Component = anyOf([
    'ExampleComponent',
]);

module.exports.types = types;
