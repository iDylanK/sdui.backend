/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const {
    array,
    object,
    ref,
    enumerate,
    nillable,
    string,
    boolean,
} = require('openapi-typescript-validator');

const component = require('./component');
const action = require('./action');
const header = require('./header');

const types = {};

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

types.Section = object({
    title: nillable(string()),
    components: nillable(array(ref('Component'))),
});

types.View = object({
    sections: nillable(array(ref('Section'))),
    scrollable: boolean(),
    refreshable: boolean(),
});

module.exports = {
    types: {
        ...types,
        ...component.types,
        ...action.types,
        ...header.types,
    },
    decoders: [
        'ErrorResponse',
    ],
};
