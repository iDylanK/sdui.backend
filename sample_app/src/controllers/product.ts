/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from 'express';

import * as products from '../helpers/products';
import getProductScreen from '../helpers/product-screen';

const getEnergyScreen = (req: Request, res: Response, next: NextFunction) => res
    .status(200).json(
        getProductScreen('LIST', products.energy, true),
    );

const getPokebowlScreen = (req: Request, res: Response, next: NextFunction) => res
    .status(200).json(
        getProductScreen('LIST', products.pokebowl, true),
    );

const getHamburgerScreen = (req: Request, res: Response, next: NextFunction) => res
    .status(200).json(
        getProductScreen('LIST', products.hamburger, true),
    );

const getSpareribsScreen = (req: Request, res: Response, next: NextFunction) => res
    .status(200).json(
        getProductScreen('LIST', products.spareribs, true),
    );

export default {
    getPokebowlScreen,
    getEnergyScreen,
    getSpareribsScreen,
    getHamburgerScreen,
};
