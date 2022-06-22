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

// Load SDUI framework
const { types } = require('../../schemas/sdui');

/** Views */

types.PrimaryButton = object({
    title: string(),
    action: optional(ref('Action')),
});

/** Components */

types.ProductComponent = compose(
    types.BaseComponent,
    object({
        type: constant('PRODUCT'),
        product: ref('Product'),
        primary_button: optional(ref('PrimaryButton')),
    }),
);

/** Headers */

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

/** Actions */

types.ProductBuy = compose(
    types.ActionBase,
    object({
        type: constant('PRODUCT_BUY'),
        title: string(),
        title_remove: string(),
    }),
);

/** PlaceHolders */

types.ProductPlaceHolder = object({
    type: constant('PRODUCT'),
    title: string(),
    image: string(),
});

/** Product */

types.ProductCategory = enumerate(['DRINK', 'FOOD', 'LIBRARY']);

types.Product = object({
    id: string(),
    content: string(),
    image: string(),
    category: ref('ProductCategory'),
});

types.Component = anyOf([...types.Component.anyOf, 'ProductComponent']);

types.Header = anyOf([...types.Header.anyOf, 'ProductHeader', 'FilterHeader']);

types.Action = anyOf([...types.Action.anyOf, 'ProductBuy']);

types.PlaceHolder = anyOf([...types.PlaceHolder.anyOf, 'ProductPlaceHolder']);

module.exports.types = types;
