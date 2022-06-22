/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from 'express';

import {
    screen,
} from '../../api';

const getProductsScreen = (req: Request, res: Response, next: NextFunction) => res.status(200).json(
    screen({
    })
);

const getProductScreen = (req: Request, res: Response, next: NextFunction) => res.status(200).json(
    screen({
    })
);

// const getHome = (req: Request, res: Response, next: NextFunction) => getLibrary(req, res, next);

export default { getProductsScreen, getProductScreen };
