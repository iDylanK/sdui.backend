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
    optional,
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
    header: nillable(ref('Header')),
    type: ref('ScreenType'),
    // data: nillable(any()), // TODO: external and somehow in.
});

types.Section = object({
    title: nillable(string()),
    components: optional(array(ref('Component'))),
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
