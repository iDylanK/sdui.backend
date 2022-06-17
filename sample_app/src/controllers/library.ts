/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from 'express';
// import { screen, view, action } from '../../api';

import {
    screen,
    component,
    section,
    action,
    product,
    content,
} from '../../api';

const getLibraryScreen = (req: Request, res: Response, next: NextFunction) => res.status(200).json(
    screen({
        id: 'screen-id-library',
        type: 'LIST',
        header: {
            id: 'header-library',
            scrollable: false,
            title: 'SDUI Library',
            display_mode: 'INLINE',
            type: 'HEADER',
        },
        content: content({
            scrollable: true,
            refreshable: true,
            searchable: true,
            sections: [
                section({
                    title: 'Content',
                    components: [
                        component({
                            id: 'screen-content',
                            type: 'PRODUCT',
                            searchable: 'Content screen',
                            product: product({
                                id: 'product-view',
                                content: 'Content screen',
                                image: 'https://cdn3.iconfinder.com/data/icons/business-world-color/64/components-layout-layer-material-plan-512.png',
                            }),
                            action: action({
                                id: 'action-content-screen',
                                type: 'NAVIGATION_LINK',
                                url: 'library/views',
                            }),
                        }),
                        component({
                            id: 'screen-list',
                            type: 'PRODUCT',
                            searchable: 'List screen',
                            product: product({
                                id: 'product-list',
                                content: 'List screen',
                                image: 'https://cdn2.iconfinder.com/data/icons/flat-pack-1/64/ToDo_List-512.png',
                            }),
                            action: action({
                                id: 'action-list-screen',
                                type: 'NAVIGATION_LINK',
                                url: 'library/list',
                            }),
                        }),
                        component({
                            id: 'screen-collection',
                            type: 'PRODUCT',
                            searchable: 'Collection screen TODO',
                            product: product({
                                id: 'product-collection',
                                content: 'Collection screen (TODO)',
                                image: 'https://cdn3.iconfinder.com/data/icons/flat-pro-basic-set-6/32/view-medium-icons-512.png',
                            }),
                            // action: action({
                            //     id: 'action-collection-screen',
                            //     type: 'NAVIGATION_LINK',
                            //     url: 'product',
                            // }),
                        }),
                    ],
                }),
                section({
                    title: 'Headers',
                    components: [
                        component({
                            id: 'header-scrollable',
                            type: 'PRODUCT',
                            searchable: 'Header scrollable',
                            product: product({
                                id: 'product-header-scrollable',
                                content: 'Scrollable',
                                image: 'https://cdn3.iconfinder.com/data/icons/leto-flowchart-1/64/flowchart_photo_header_page_home-512.png',
                            }),
                            action: action({
                                id: 'action-header-scrollable-screen',
                                type: 'NAVIGATION_LINK',
                                url: 'library/header/scrollable',
                                place_holder: {
                                    type: 'PRODUCT',
                                    title: 'Spare Ribs',
                                    image: 'https://cdn0.iconfinder.com/data/icons/meats-fish/512/Spare_ribs-512.png',
                                },
                            }),
                        }),
                        component({
                            id: 'header',
                            type: 'PRODUCT',
                            searchable: 'Header fixed',
                            product: product({
                                id: 'product-header',
                                content: 'Fixed',
                                image: 'https://cdn3.iconfinder.com/data/icons/leto-flowchart-1/64/flowchart_laptop_header_home_page-512.png',
                            }),
                            action: action({
                                id: 'action-header-fixed',
                                type: 'NAVIGATION_LINK',
                                url: 'library/header',
                            }),
                        }),
                    ],
                }),
                section({
                    title: 'Actions',
                    components: [
                        component({
                            id: 'components-alert',
                            type: 'PRODUCT',
                            searchable: 'Alert component',
                            product: product({
                                id: 'product-alert',
                                content: 'Alert',
                                image: 'https://cdn2.iconfinder.com/data/icons/alert-message/64/bell-alert-exclamation-icon-512.png',
                            }),
                            action: action({
                                title: 'Alert library2.',
                                id: 'action-components-alert',
                                type: 'ALERT',
                            }),
                        }),
                        component({
                            id: 'components-share',
                            type: 'PRODUCT',
                            searchable: 'Share component',
                            product: product({
                                id: 'product-share',
                                content: 'Share',
                                image: 'https://cdn3.iconfinder.com/data/icons/network-and-communications-8/32/network_share_arrow-512.png',
                            }),
                            action: action({
                                id: 'share-components-button',
                                type: 'SHARE',
                                url: 'https://apple.com',
                            }),
                        }),
                        // component({
                        //     id: 'components-text',
                        //     type: 'PRODUCT',
                        //     searchable: 'Text component',
                        //     product: product({
                        //         id: 'product-text',
                        //         content: 'Text',
                        //         image: 'https://cdn4.iconfinder.com/data/icons/office-business-1/512/text_document-512.png',
                        //     }),
                        //     action: action({
                        //         id: 'action-components-text',
                        //         type: 'NAVIGATION_LINK',
                        //         url: 'product',
                        //     }),
                        // }),
                    ],
                }),
                section({
                    title: 'Examples',
                    components: [
                        component({
                            id: 'example-plp',
                            type: 'PRODUCT',
                            searchable: 'Product List Page',
                            product: product({
                                id: 'product-plp',
                                content: 'Product list page',
                                image: 'https://cdn0.iconfinder.com/data/icons/product-management-and-global-business-3/512/91_checklist_Check_file_list_page_task_testing-256.png',
                            }),
                            action: action({
                                id: 'action-plp',
                                type: 'NAVIGATION_LINK',
                                url: 'library/list',
                            }),
                        }),
                        component({
                            id: 'example-shopping-card',
                            type: 'PRODUCT',
                            searchable: 'Shopping card',
                            product: product({
                                id: 'product-shopping-card',
                                content: 'Shopping card',
                                image: 'https://cdn4.iconfinder.com/data/icons/black-friday-143/64/12-Buy-512.png',
                            }),
                        }),
                    ],
                }),
            ],
        }),
    }),
);

// const getHome = (req: Request, res: Response, next: NextFunction) => getLibrary(req, res, next);

export default { getLibraryScreen };
