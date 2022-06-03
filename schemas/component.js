/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const {
    array,
    constant,
    object,
    optional,
    ref,
    anyOf,
    string,
    nillable,
    number,
    compose,
    enumerate,
} = require('../packages/openapi-typescript-validator');

const types = {};

/**
 * Components
 */


types.Component = anyOf([
    'Product',
]);

// types.PostList = compose(
//     types.CustomBase,
//     object({
//         custom_type: constant('POST_LIST'),
//         title: nillable(string()),
//         message: nillable(string()),
//     }),
// );

types.Product = object({
    image: string(),
    content: string(),
    // action: optional(externalRef('.../...json', 'Action')),
    action: string(),
});


module.exports.types = types;
