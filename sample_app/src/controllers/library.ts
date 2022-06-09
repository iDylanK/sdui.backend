/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from 'express';
// import { screen, view, action } from '../../api';

import {
    screen,
    component,
    section,
    action,
    product,
    view,
} from '../../api';

const getLibraryScreen = (req: Request, res: Response, next: NextFunction) => res.status(200).json(
    screen({
        id: 'screen-id-library',
        type: 'LIST',
        view: view({
            scrollable: true,
            refreshable: true,
            sections: [
                section({
                    title: 'Views',
                    components: [
                        component({
                            id: 'screen-views',
                            type: 'PRODUCT',
                            product: product({
                                content: 'Views screen',
                                image: 'https://cdn3.iconfinder.com/data/icons/business-world-color/64/components-layout-layer-material-plan-512.png',
                            }),
                            action: action({
                                id: 'action-views-screen',
                                type: 'NAVIGATION_LINK',
                                url: 'product',
                            }),
                        }),
                        component({
                            id: 'screen-list',
                            type: 'PRODUCT',
                            product: product({
                                content: 'List screen',
                                image: 'https://cdn2.iconfinder.com/data/icons/flat-pack-1/64/ToDo_List-512.png',
                            }),
                            action: action({
                                id: 'action-list-screen',
                                type: 'NAVIGATION_LINK',
                                url: 'product',
                            }),
                        }),
                        component({
                            id: 'screen-collection',
                            type: 'PRODUCT',
                            product: product({
                                content: 'Collection screen (TODO)',
                                image: 'https://cdn3.iconfinder.com/data/icons/flat-pro-basic-set-6/32/view-medium-icons-512.png',
                            }),
                            action: action({
                                id: 'action-collection-screen',
                                type: 'NAVIGATION_LINK',
                                url: 'product',
                            }),
                        }),
                    ],
                }),
                section({
                    title: 'Headers',
                    components: [
                        component({
                            id: 'header-scrollable',
                            type: 'PRODUCT',
                            product: product({
                                content: 'Scrollable',
                                image: 'https://cdn3.iconfinder.com/data/icons/food-emoji/50/EnergyDrink-512.png',
                            }),
                        }),
                        component({
                            id: 'header',
                            type: 'PRODUCT',
                            product: product({
                                content: 'Fixed',
                                image: 'https://cdn3.iconfinder.com/data/icons/food-emoji/50/Salad-512.png',
                            }),
                            action: action({
                                id: 'action-header-fixed',
                                type: 'NAVIGATION_LINK',
                                url: 'product',
                            }),
                        }),
                    ],
                }),
                section({
                    title: 'Components',
                    components: [
                        component({
                            id: 'components-button',
                            type: 'PRODUCT',
                            product: product({
                                content: 'Button',
                                image: 'https://cdn4.iconfinder.com/data/icons/black-friday-143/64/12-Buy-512.png',
                            }),
                            action: action({
                                id: 'action-components-button',
                                type: 'NAVIGATION_LINK',
                                url: 'product',
                            }),
                        }),
                        component({
                            id: 'components-text',
                            type: 'PRODUCT',
                            product: product({
                                content: 'Text',
                                image: 'https://cdn4.iconfinder.com/data/icons/office-business-1/512/text_document-512.png',
                            }),
                            action: action({
                                id: 'action-components-text',
                                type: 'NAVIGATION_LINK',
                                url: 'product',
                            }),
                        }),
                    ],
                }),
            ],
        }),
        navigation_view: {
            title: 'SDUI Library',
            display_mode: 'INLINE',
        },
    }),
);

// const getHome = (req: Request, res: Response, next: NextFunction) => getLibrary(req, res, next);

export default { getLibraryScreen };
