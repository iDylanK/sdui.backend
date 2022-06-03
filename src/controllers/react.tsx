/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from 'express';
import React, { Component } from 'react';
import renderToJson from '../utils/json';

// class Screen extends Component {
//     render() {
//         return(
//             <p>test??</p>
//         );
//     }
// }

type ScreentScreenProps = {
    flex?: boolean;
    style?: any;
    children: JSX.Element[] | JSX.Element
}

export type View = {
    content: string;
}
export type Child = View | View[];

export type Screen = {
    view?: View | null;
    text: string;
    children: React.ReactNode
}

/**
 * Terminus node: nothing more sits inside.
 * This can be for example a "Text" or "Image" component
 * @param name component name
 * @returns component
 */
export function final<T>(name: string): (t: T) => JSX.Element {
    const f = (props: any): JSX.Element => (props && (props.children as any as JSX.Element))
        || null;
    Object.defineProperty(f, 'name', { value: name, writable: false });
    return f;
}

const ScreenElement = final<Screen>('Screen');
const ViewElement = final<View>('View');

function getJSXTest(req: Request, res: Response, next: NextFunction) {
    const a = renderToJson(
        <ScreenElement text='kaas' >
            <ViewElement content="asd" />
            <ViewElement content="asd" />
        </ScreenElement>,
    );
    return res.status(200).json(a);
}

export default { getJSXTest };
