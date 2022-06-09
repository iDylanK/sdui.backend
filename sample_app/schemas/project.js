/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const {
    constant,
    object,
    ref,
    anyOf,
    string,
    compose,
} = require('openapi-typescript-validator');

/**
 * Components
 */

// Load SDUI frameowork
const { types } = require('../../schemas/sdui');

types.ProductComponent = compose(
    types.ComponentBase,
    object({
        type: constant('PRODUCT'),
        product: ref('Product'),
    }),
);

types.ProductHeader = compose(
    types.HeaderBase,
    object({
        type: constant('PRODUCT'),
        product: ref('Product'),
    }),
);

types.Product = object({
    content: string(),
    image: string(),
});

types.Component = anyOf([...types.Component.anyOf, 'ProductComponent']);

// types.Header = anyOf([
//     'ProductHeader',
// ]);
types.Header = anyOf([...types.Header.anyOf, 'ProductHeader']);

module.exports.types = types;
