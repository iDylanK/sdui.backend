/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from 'express';

import getProductScreen from '../helpers/product-screen';

const getContentScreen = (req: Request, res: Response, next: NextFunction) => res.status(200).json(
    getProductScreen('CONTENT_VIEW'),
);

const getListScreen = (req: Request, res: Response, next: NextFunction) => res.status(200).json(
    getProductScreen('LIST'),
);

export default { getContentScreen, getListScreen };
