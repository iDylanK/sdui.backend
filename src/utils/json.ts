// https://github.com/hermanbanken/sduix/blob/main/server/renderToJson.ts

import { Fragment } from 'react';

export type Element<T = any> = {
  type: string;
  props: T;
  items: Element[];
};

// Constants: these fields are used in JSON transport protocol; personal preference!
const PROPS = 'props'; // react uses: "props"
const CHILDREN = 'items'; // react uses: "children"
const TYPE = 'type'; // react uses: "type" and "Component.name"
const FRAGMENT = '_'; // name for <></> React.Fragment component

// Copyright MIT: https://github.com/gorangajic/react-render-to-json
export default function renderToJson(element: JSX.Element) {
    const res: any = {};
    if (!element || !element.type) {
        console.log('unknown', element);
        return element;
    }
    const Component = element.type;
    res[TYPE] = element.type;
    res[PROPS] = { ...element.props };
    let children = element.props ? element.props.children : null;
    delete res[PROPS].children;
    if (Component === Fragment) {
        res[TYPE] = FRAGMENT;
    } else if (typeof Component !== 'string') {
        res[TYPE] = Component.name;
        const context = (element as any).context || {};
        if (
            Component.prototype
      && typeof Component.prototype.render === 'function'
        ) {
            // ReactComponent
            children = new Component(element.props, context).render();
        } else {
            // function component
            children = Component(element.props, context);
        }
    }
    if (Array.isArray(children)) {
        res[CHILDREN] = children.flatMap((child) => (Array.isArray(child) ? child.map(renderToJson) : [renderToJson(child)]));
        return res;
    } if (children) {
        res[CHILDREN] = [renderToJson(children)];
    }
    return res;
}

// FlatMap polyfill
if (!Array.prototype.flatMap) {
    // eslint-disable-next-line no-extend-native
    Array.prototype.flatMap = function <T, R> (
        this: T[],
        fn: (t: T, index: number, all: T[]) => R[],
    ): R[] {
        return this.reduce(
            (acc, x, idx, all) => [...acc, ...fn(x, idx, all)],
      [] as R[],
        );
    };
}
