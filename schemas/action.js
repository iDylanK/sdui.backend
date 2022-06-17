/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const {
    constant,
    object,
    anyOf,
    string,
    nillable,
    compose,
    ref,
} = require('openapi-typescript-validator');

const types = {};

types.Action = anyOf([
    'Sheet',
    'Alert',
    'NavigationLink',
    'Share',
]);

types.ActionBase = object({
    id: string(),
    place_holder: nillable(ref('PlaceHolder')),
});

types.Alert = compose(
    types.ActionBase,
    object({
        type: constant('ALERT'),
        title: nillable(string()),
        message: nillable(string()),
    }),
);

types.Sheet = compose(
    types.ActionBase,
    object({
        type: constant('SHEET'),
        url: string(),
    }),
);

types.Share = compose(
    types.ActionBase,
    object({
        type: constant('SHARE'),
        url: string(),
    }),
);

types.NavigationLink = compose(
    types.ActionBase,
    object({
        type: constant('NAVIGATION_LINK'),
        url: string(),
    }),
);

// types.PlaceHolder = anyOf([
//     'PRODUCT',
// ]);

types.ExamplePlaceHolder = object({
    type: constant('EXAMPLE'),
    title: string(),
    image: string(),
});

types.PlaceHolder = anyOf([
    'ExamplePlaceHolder',
]);

module.exports.types = types;
