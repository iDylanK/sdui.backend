/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const {
    optional,
    object,
    anyOf,
    string,
    compose,
    ref,
    constant,
} = require('openapi-typescript-validator');

const types = {};

types.BaseComponent = object({
    id: string(),
    action: optional(ref('Action')),
    searchable: optional(string()),
});

types.BasicComponent = compose(
    types.BaseComponent,
    object({
        type: constant('BASIC'),
        content: string(),
    }),
);

types.Component = anyOf([
    'BasicComponent',
]);

module.exports.types = types;
