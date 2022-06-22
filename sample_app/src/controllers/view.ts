/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from 'express';

import { getProductScreen } from '../helpers/product-screen';

const getContentScreen = (req: Request, res: Response, next: NextFunction) => res.status(200).json(
    getProductScreen('CONTENT_VIEW'),
);

const getListScreen = (req: Request, res: Response, next: NextFunction) => res.status(200).json(
    getProductScreen('LIST', {
        id: 'header-filter',
        title: 'Products',
        type: 'FILTER',
        scrollable: false,
    }),
);

export default { getContentScreen, getListScreen };
