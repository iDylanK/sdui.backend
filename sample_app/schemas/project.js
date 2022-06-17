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

types.ProductPlaceHolder = object({
    type: constant('PRODUCT'),
    title: string(),
    image: string(),
});

types.Component = anyOf([...types.Component.anyOf, 'ProductComponent']);

types.Header = anyOf([...types.Header.anyOf, 'ProductHeader']);

types.Action = anyOf([...types.Action.anyOf, 'ProductBuy']);

types.PlaceHolder = anyOf([...types.PlaceHolder.anyOf, 'ProductPlaceHolder']);

module.exports.types = types;
