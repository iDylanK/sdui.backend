/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const {
    array,
    object,
    ref,
    enumerate,
    nillable,
    any,
    optional,
    string,
    boolean,
    anyOf,
    oneOf,
    constant,
    number
} = require('openapi-typescript-validator');

// const component = require('./component');
const action = require('./action');
// const post = require('./post');

let types = {};

types.Color = enumerate([
    'RED',
    'BLUE',
]);

types.ScreenType = enumerate([
    'LIST',
    'VIEWS',
]);

types.Screen = object({
    id: string(),
    view: nillable(ref('View')),
    navigation_view: nillable(ref('NavigationView')),
    header: nillable(ref('Header')),
    type: ref('ScreenType'),
    // data: nillable(any()), // TODO: external and somehow in.
});

types.NavigationView = object({
    title: string(),
    display_mode: nillable(ref('DisplayMode')),

});

types.DisplayMode = enumerate([
    'AUTOMATIC',
    'INLINE',
    'LARGE',
]);

types.Header = object({
    id: string(),
    scrollable: boolean(),
});

types.Section = object({
    title: nillable(string()),
    components: nillable(array(ref('Component'))),
});

types.View = object({
    sections: nillable(array(ref('Section'))),
    scrollable: boolean(),
    refreshable: boolean(),
});

types.Component = object({
    id: string(),
    action: optional(ref('Action')),
    // content: nillable(any()),
    // test: optional(number()),
});

// const component = require('../../../schemas');

// require('fs').readdirSync('../../schemas').forEach((file) => {
//     console.log(file)
//     if (file.split('.').pop() === 'js') {
//         // eslint-disable-next-line global-require
//         // eslint-disable-next-line import/no-dynamic-require
//         const fileTypes = require(`../../../schemas/${file}`).types;
//         types = { ...types, fileTypes }
//     }
// });

// types.Component = object({
//     id: string(),
// });

module.exports = {
    types: {
        ...types,
        // ...component.types,
        ...action.types,
        // ...post.types,
    },
    decoders: [
        'ErrorResponse',
    ],
};
