/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const {
    constant,
    object,
    ref,
    anyOf,
    string,
    compose,
    optional,
    enumerate,
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

types.ProductCategory = enumerate(['DRINK', 'FOOD', 'LIBRARY']);

types.ProductComponent = compose(
    types.BaseComponent,
    object({
        type: constant('PRODUCT'),
        product: ref('Product'),
        primary_button: optional(ref('PrimaryButton')),
    }),
);

types.ProductHeader = compose(
    types.BaseHeader,
    object({
        type: constant('PRODUCT'),
        product: ref('Product'),
        primary_button: ref('PrimaryButton'),
    }),
);

types.FilterHeader = compose(
    types.BaseHeader,
    object({
        type: constant('FILTER'),
    }),
);

types.Product = object({
    id: string(),
    content: string(),
    image: string(),
    category: ref('ProductCategory'),
});

types.ProductBuy = compose(
    types.ActionBase,
    object({
        type: constant('PRODUCT_BUY'),
        title: string(),
        title_remove: string(),
    }),
);

types.ProductPlaceHolder = object({
    type: constant('PRODUCT'),
    title: string(),
    image: string(),
});

types.Component = anyOf([...types.Component.anyOf, 'ProductComponent']);

types.Header = anyOf([...types.Header.anyOf, 'ProductHeader', 'FilterHeader']);

types.Action = anyOf([...types.Action.anyOf, 'ProductBuy']);

types.PlaceHolder = anyOf([...types.PlaceHolder.anyOf, 'ProductPlaceHolder']);

module.exports.types = types;
