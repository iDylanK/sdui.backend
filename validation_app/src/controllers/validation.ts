/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from 'express';

import {
    screen,
} from '../../api';

const getProductsScreen = (req: Request, res: Response, next: NextFunction) => res.status(200).json(
    screen({
        id: 'screen-products',
        type: 'LIST',
        content: {
            sections: [
                {
                    components: [
                        {
                            id: 'component-0',
                            type: 'BASIC',
                            content: 'Hello world',
                        },
                    ],
                },
            ],
        },
    }),
);

const getProductScreen = (req: Request, res: Response, next: NextFunction) => res.status(200).json(
    screen({
        id: 'screen-product',
        type: 'CONTENT_VIEW',
    }),
);

// const getHome = (req: Request, res: Response, next: NextFunction) => getLibrary(req, res, next);

export default { getProductsScreen, getProductScreen };
