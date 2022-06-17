/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from 'express';

import * as products from '../helpers/products';
import { getProductScreen, productHeader } from '../helpers/product-screen';

const getEnergyScreen = (req: Request, res: Response, next: NextFunction) => res
    .status(200).json(
        getProductScreen('LIST', productHeader(products.energy, true)),
    );

const getPokebowlScreen = (req: Request, res: Response, next: NextFunction) => res
    .status(200).json(
        getProductScreen('LIST', productHeader(products.pokebowl, true)),
    );

const getHamburgerScreen = (req: Request, res: Response, next: NextFunction) => res
    .status(200).json(
        getProductScreen('LIST', productHeader(products.hamburger, true)),
    );

const getSpareribsScreen = (req: Request, res: Response, next: NextFunction) => res
    .status(200).json(
        getProductScreen('LIST', productHeader(products.spareribs, true)),
    );

export default {
    getPokebowlScreen,
    getEnergyScreen,
    getSpareribsScreen,
    getHamburgerScreen,
};
