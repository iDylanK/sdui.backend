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
    'CONTENT_VIEW',
]);

types.Screen = object({
    id: string(),
    content: nillable(ref('Content')),
    header: optional(ref('Header')),
    type: ref('ScreenType'),
});

types.Section = object({
    title: nillable(string()),
    components: optional(array(ref('Component'))),
});

types.Content = object({
    sections: nillable(array(ref('Section'))),
    scrollable: nillable(boolean()),
    refreshable: nillable(boolean()),
    searchable: optional(boolean()),
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
