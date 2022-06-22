/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const {
    boolean,
    object,
    anyOf,
    string,
    compose,
    constant,
    nillable,
    ref,
    enumerate,
    optional,
} = require('openapi-typescript-validator');

const types = {};

types.DisplayMode = enumerate([
    'AUTOMATIC',
    'INLINE',
    'LARGE',
]);

types.BaseHeader = object({
    id: string(),
    scrollable: boolean(),
    title: string(),
    display_mode: nillable(ref('DisplayMode')),
    action: optional(ref('Action')),
});

types.MainHeader = compose(
    types.BaseHeader,
    object({
        type: constant('HEADER'),
    }),
);

types.Header = anyOf([
    'MainHeader',
]);

module.exports.types = types;
