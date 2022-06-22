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

// types.Component = anyOf([...types.Component.anyOf, 'ProductComponent']);

module.exports.types = types;
