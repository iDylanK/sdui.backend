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
} = require('openapi-typescript-validator');

const types = {};

types.DisplayMode = enumerate([
    'AUTOMATIC',
    'INLINE',
    'LARGE',
]);

types.HeaderBase = object({
    id: string(),
    scrollable: boolean(),
    title: string(),
    display_mode: nillable(ref('DisplayMode')),
    action: nillable(ref('Action')),
});

types.HeaderMain = compose(
    types.HeaderBase,
    object({
        type: constant('HEADER'),
    }),
);

types.Header = anyOf([
    'HeaderMain',
]);

module.exports.types = types;
