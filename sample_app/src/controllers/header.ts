/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from 'express';

import getProductScreen from '../helpers/product-screen';
import * as products from '../helpers/products';

const getHeaderScreen = (req: Request, res: Response, next: NextFunction) => res.status(200).json(
    getProductScreen('LIST', products.pokebowl),
);

const getHeaderScrollableScreen = (req: Request, res: Response, next: NextFunction) => res
    .status(200).json(
        getProductScreen('LIST', products.spareribs, true),
    );

export default { getHeaderScreen, getHeaderScrollableScreen };
