/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const {
    constant,
    object,
    ref,
    anyOf,
    string,
    compose,
    nillable,
    optional,
} = require('openapi-typescript-validator');

/**
 * Components
 */

// Load SDUI frameowork
const { types } = require('../../schemas/sdui');

types.PrimaryButton = object({
    title: string(),
    action: optional(ref('Action')),
});

types.ComponentProduct = compose(
    types.ComponentBase,
    object({
        type: constant('PRODUCT'),
        product: ref('Product'),
        primary_button: optional(ref('PrimaryButton')),
    }),
);

types.HeaderProduct = compose(
    types.HeaderBase,
    object({
        type: constant('PRODUCT'),
        product: ref('Product'),
        primary_button: ref('PrimaryButton'),
    }),
);

types.Product = object({
    id: string(),
    content: string(),
    image: string(),
});

types.ProductBuy = compose(
    types.ActionBase,
    object({
        type: constant('PRODUCT_BUY'),
        title: string(),
        title_remove: string(),
    }),
);

types.Component = anyOf([...types.Component.anyOf, 'ComponentProduct']);

types.Header = anyOf([...types.Header.anyOf, 'HeaderProduct']);

types.Action = anyOf([...types.Action.anyOf, 'ProductBuy']);

module.exports.types = types;
