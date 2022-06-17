/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from 'express';

import { getProductScreen, productHeader } from '../helpers/product-screen';
import * as products from '../helpers/products';

const getHeaderScreen = (req: Request, res: Response, next: NextFunction) => res.status(200).json(
    getProductScreen('LIST', productHeader(products.pokebowl, false)),
);

const getHeaderScrollableScreen = (req: Request, res: Response, next: NextFunction) => res
    .status(200).json(
        getProductScreen('LIST', productHeader(products.spareribs, true)),
    );

export default { getHeaderScreen, getHeaderScrollableScreen };
