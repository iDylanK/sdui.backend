/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from 'express';
// import { screen, view, action } from '../../api';

// import { post } from '../../api';

// getting all posts
// const getHome = (req: Request, res: Response, next: NextFunction) => res.status(200).json({
//     title: 'title_test',
//     type: 'POST_VIEW',
// });

const getPage2 = (req: Request, res: Response, next: NextFunction) => res.status(200).json({
    view: {
        components: [
        ],
    },
});

const getPage1 = (req: Request, res: Response, next: NextFunction) => res.status(200).json({
    view: {
        components: [
        ],
    },
});

const getHeaderPage = (req: Request, res: Response, next: NextFunction) => res.status(200).json({
    view: {
        components: [
        ],
    },
});

const getLibrary = (req: Request, res: Response, next: NextFunction) => res.status(200).json(
    {
        id: 'screen-id-library',
        type: 'LIST',
        view: {
            scrollable: true,
            refreshable: true,
            sections: [
                {
                    id: 'section-views',
                    title: 'Views',
                    components: [
                        {
                            id: 'screen-views',
                            type: 'PRODUCT',
                            product: {
                                content: 'Views screen',
                                image: 'https://cdn3.iconfinder.com/data/icons/business-world-color/64/components-layout-layer-material-plan-512.png',
                            },
                            action: {
                                id: 'action-views-screen',
                                type: 'NAVIGATION_LINK',
                                url: 'product',
                            },
                        },
                        {
                            id: 'screen-list',
                            type: 'PRODUCT',
                            product: {
                                content: 'List screen',
                                image: 'https://cdn2.iconfinder.com/data/icons/flat-pack-1/64/ToDo_List-512.png',
                            },
                            action: {
                                id: 'action-list-screen',
                                type: 'NAVIGATION_LINK',
                                url: 'product',
                            },
                        },
                        {
                            id: 'screen-collection',
                            type: 'PRODUCT',
                            product: {
                                content: 'Collection screen (TODO)',
                                image: 'https://cdn3.iconfinder.com/data/icons/flat-pro-basic-set-6/32/view-medium-icons-512.png',
                            },
                            action: {
                                id: 'action-collection-screen',
                                type: 'NAVIGATION_LINK',
                                url: 'product',
                            },
                        },
                    ],
                },
                {
                    id: 'section-headers',
                    title: 'Headers',
                    components: [
                        {
                            id: 'header-scrollable',
                            type: 'PRODUCT',
                            product: {
                                content: 'Scrollable',
                                image: 'https://cdn3.iconfinder.com/data/icons/food-emoji/50/EnergyDrink-512.png',
                            },
                        },
                        {
                            id: 'header',
                            type: 'PRODUCT',
                            product: {
                                content: 'Fixed',
                                image: 'https://cdn3.iconfinder.com/data/icons/food-emoji/50/Salad-512.png',
                            },
                            action: {
                                id: 'action-header-fixed',
                                type: 'NAVIGATION_LINK',
                                url: 'product',
                            },
                        },
                    ],
                },
                {
                    id: 'section-components',
                    title: 'Components',
                    components: [
                        {
                            id: 'components-button',
                            type: 'PRODUCT',
                            product: {
                                content: 'Button',
                                image: 'https://cdn4.iconfinder.com/data/icons/black-friday-143/64/12-Buy-512.png',
                            },
                            action: {
                                id: 'action-components-button',
                                type: 'NAVIGATION_LINK',
                                url: 'product',
                            },
                        },
                        {
                            id: 'components-text',
                            type: 'PRODUCT',
                            product: {
                                content: 'Text',
                                image: 'https://cdn4.iconfinder.com/data/icons/office-business-1/512/text_document-512.png',
                            },
                            action: {
                                id: 'action-components-text',
                                type: 'NAVIGATION_LINK',
                                url: 'product',
                            },
                        },
                    ],
                },
            ],
        },
        navigation_view: {
            title: 'SDUI Library',
            display_mode: 'INLINE',
        },
    },
);

const getProduct = (req: Request, res: Response, next: NextFunction) => res.status(200).json(
    {
        id: 'screen-id-product',
        type: 'VIEWS',
        view: {
            refreshable: true,
            scrollable: false,
            sections: [
                {
                    components: [
                        {
                            id: '0',
                            type: 'PRODUCT',
                            product: {
                                content: 'Energy DDD',
                                image: 'https://cdn3.iconfinder.com/data/icons/food-emoji/50/EnergyDrink-512.png',
                            },
                        },
                        {
                            id: '1',
                            type: 'PRODUCT',
                            product: {
                                content: 'Vegetables',
                                image: 'https://cdn3.iconfinder.com/data/icons/food-emoji/50/Salad-512.png',
                            },
                            action: {
                                id: 'action-0',
                                type: 'NAVIGATION_LINK',
                                url: 'product',
                            }
                        },
                        {
                            id: '2',
                            type: 'PRODUCT',
                            product: {
                                content: 'Vegetables',
                                image: 'https://cdn3.iconfinder.com/data/icons/food-emoji/50/Salad-512.png',
                            },
                        },
                        {
                            id: '3',
                            type: 'PRODUCT',
                            product: {
                                content: 'Vegetables2233',
                                image: 'https://cdn3.iconfinder.com/data/icons/food-emoji/50/Salad-512.png',
                            },
                        },

                    ],
                },
            ],
        },
        header: {
            id: '0',
            scrollable: true,
            type: 'PRODUCT',
            product: {
                content: 'Energy Drinks',
                image: 'https://media.nu.nl/m/5znx253arrq8_xwd1280.jpg/red-bull-houdt-nog-veel-achter-bij-presentatie-nieuwe-auto-verstappen.jpg',
            },
        },
        navigation_view: {
            title: 'Product',
        }
    },
);

const getHome = (req: Request, res: Response, next: NextFunction) => getLibrary(req, res, next);

export default { getHome, getPage1, getPage2, getHeaderPage, getProduct };

// const getTest = (req: Request, res: Response, next: NextFunction) => res.status(200).json({
//     view: {
//         components: [
//             {
//                 text: {
//                     content: 'text 1',
//                 },
//             },
//             {
//                 text: {
//                     content: 'text 2',
//                 },
//             },
//         ],
//     },
// });

// const listExample = (req: Request, res: Response, next: NextFunction) => res.status(200).json({
//     view: {
//         components: [ // cache this
//             {
//                 type: 'LIST',
//                 cell: {
//                     components: [
//                         {
//                             type: 'TEXT',
//                             content: '$POST.title',
//                         },
//                         {
//                             type: 'TEXT',
//                             content: '$POST.message',
//                         },
//                     ],
//                 },
//             },
//             {
//                 type: 'PROGRESS_VIEW',
//                 content: 'text 2',
//             },
//         ],
//     },
//     // data: (application specific)
//     posts: [
//         {
//             title: 'title',
//             message: 'message',
//         },
//         {
//             title: 'title',
//             message: 'message',
//         },
//     ],
//     reloadUrl: '', // url to only reload posts and not ui. might give a date when UI is changed, so the app might reload the ui data. 
// });
