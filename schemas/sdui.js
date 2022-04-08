/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const {
    array,
    constant,
    enumerate,
    nillable,
    object,
    optional,
    ref,
    compose,
    anyOf,
    boolean,
    number,
    string,
    map,
    any,
} = require('openapi-typescript-validator');
  
const types = {};

const emptyObject = {
  type: 'object',
  properties: {},
  additionalProperties: false,
};

types.EmptyRequest = emptyObject;
types.EmptyResponse = emptyObject;

types.ErrorResponse = object({
  message: string()
});

types.Post = object({
  id: string(),
  title: string(),
  message: string(),
  image_url: string()
})

types.Posts = array(ref("Post"));

/**
 * SDUI
 */

module.exports = {
  types,
  decoders: [
    'ErrorResponse',
  ],
};
