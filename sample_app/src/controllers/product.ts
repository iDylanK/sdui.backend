/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from 'express';

import {
    screen,
    component,
    section,
    action,
    product,
    view,
    header,
} from '../../api';

const getProductScreen = (req: Request, res: Response, next: NextFunction) => res.status(200).json(
    screen({
        id: 'screen-id-product',
        type: 'VIEWS',
        view: view({
            refreshable: true,
            scrollable: false,
            sections: [
                section({
                    components: [
                        component({
                            id: '0',
                            type: 'PRODUCT',
                            product: product({
                                content: 'Energy DDD',
                                image: 'https://cdn3.iconfinder.com/data/icons/food-emoji/50/EnergyDrink-512.png',
                            }),
                        }),
                        component({
                            id: '1',
                            type: 'PRODUCT',
                            product: product({
                                content: 'Vegetables',
                                image: 'https://cdn3.iconfinder.com/data/icons/food-emoji/50/Salad-512.png',
                            }),
                            action: action({
                                id: 'action-0',
                                type: 'NAVIGATION_LINK',
                                url: 'product',
                            }),
                        }),
                        component({
                            id: '2',
                            type: 'PRODUCT',
                            product: product({
                                content: 'Vegetables',
                                image: 'https://cdn3.iconfinder.com/data/icons/food-emoji/50/Salad-512.png',
                            }),
                        }),
                        component({
                            id: '3',
                            type: 'PRODUCT',
                            product: product({
                                content: 'Vegetables2233',
                                image: 'https://cdn3.iconfinder.com/data/icons/food-emoji/50/Salad-512.png',
                            }),
                        }),

                    ],
                }),
            ],
        }),
        header: header({
            id: '0',
            scrollable: true,
            type: 'PRODUCT',
            product: product({
                content: 'Energy Drinks',
                image: 'https://media.nu.nl/m/5znx253arrq8_xwd1280.jpg/red-bull-houdt-nog-veel-achter-bij-presentatie-nieuwe-auto-verstappen.jpg',
            }),
        }),
        navigation_view: {
            title: 'Product',
        },
    }),
);


export default { getProductScreen };
