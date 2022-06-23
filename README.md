# SDUI Typescript generator

## Getting started

### Installation 
There are 2 ways to get started:
- Install the SDUI npm dependency (in the future..).
- Clone this repo and locally import the root folder as a dependency to a project.
- Use the included sample_app, where this package is already installed as a dependency.

When not using npm, make sure to build the library using `npm run build`. 

## Defining schemas
The first step is to create a JavaScript schema file (example: project.js) for your application. How these schemas work and look like is explained [here](https://github.com/Q42/openapi-typescript-validator).

For this SDUI library, it's important that your application's types expand the library types. This means that your project.js should start with importing these types:

```
// Load SDUI framework
const { types } = require('<sdui_library_location>/schemas/sdui');
```

and end with exporting the new types: `module.exports.types = types;`. 

### Adding Components, Actions, Headers and PlaceHolders
When adding your custom logic, make sure that they are based of their library's base parts and contain a type constant:

```
types.CustomComponent = compose(
    types.BaseComponent,
    object({
        type: constant('XXXX'),
        ...
    }),
);
```

Only PlaceHolders don't have a base part and can direcrly be formed:

```
types.CustomPlaceHolder = object({
    type: constant('XXXX'),
    ...
});
```

Before exporting the types, make sure your custom properties are added to the library types:

```
types.Component = anyOf([...types.Component.anyOf, 'CustomComponent', .....]);
types.Header = anyOf([...types.Header.anyOf, .....]);
types.Action = anyOf([...types.Action.anyOf, .....]);
types.PlaceHolder = anyOf([...types.PlaceHolder.anyOf, .....]);
```

## Generation
This package contains an sdui command to help generate a json api schema, typescript types and swift models.

### Typescript types

Buidling typescript models:

`sdui schema <your_project.js> <generated_output_directory>`

This outputs a json schema file and the corresponding typescript types to be used within your API.

## Generating Swift models

To generate the corresponding swift models run:

`sdui swift <generated_output_directory/schema.json <sduiValidation_directory/Shared/Domain/ValidationModels.swift>`

## Search:
- Only local search is possible for now. Add a searchable string to a component. Can contain more keywords like this too.
- TODO: search via delegate.
- TODO: search via server.

## Share
- 
- TODO: sharing images. expand the delegate to support this.

## Contributing
The SDUI Swift Library needs to be installed (see XX).
Copy .nmprc.example to .npmrc and specify the SDUI Swift Library location.
