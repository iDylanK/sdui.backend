/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from 'express';

import { screen, view, component, cell, action } from '../../api';

const getProductScreen = (req: Request, res: Response, next: NextFunction) => res.status(200).json(
    screen({
        view: view({
            sections: [
                {
                    components: [
                    ],
                },
            ],
        }),
    }),
);

const getProductsCustomScreen = (req: Request, res: Response, next: NextFunction) => res.status(200).json(
    screen({
        view: view({
            sections: [
                {
                    components: [
                        // {
                        //     type: 'CUSTOM',
                        //     custom_type: 'PRODUCT_LIST',
                        //     products: [
                        //         {
                        //             image: 'https://cdn3.iconfinder.com/data/icons/food-emoji/50/EnergyDrink-512.png',
                        //             content: 'Energy drinks',
                        //             action: {
                        //                 id: '435y3474',
                        //                 type: 'SHEET',
                        //                 url: 'product',
                        //             },
                        //         },
                        //         {
                        //             image: 'https://cdn3.iconfinder.com/data/icons/food-emoji/50/Salad-512.png',
                        //             content: 'Vegetables',
                        //         },
                        //     ],
                        // },
                    ],
                },
            ],
        }),
        navigation_view: {
            title: 'Products Custom',
            refreshable: true,
        },
    }),
);

const getProductsScreen = (req: Request, res: Response, next: NextFunction) => res.status(200).json(
    screen({
        view: view({
            sections: [
                {
                    components: [],
                },
            ],
        }),
        navigation_view: {
            title: 'Products',
            refreshable: true,
        },
    }),
);


export default { getProductsCustomScreen, getProductsScreen, getProductScreen };
