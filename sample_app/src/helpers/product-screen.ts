import {
    screen,
    component,
    section,
    action,
    content,
} from '../../api';

import { Screen, ScreenType, Header, Product } from '../../generated/models';
import * as products from './products';

function productHeader(product: () => Product, headerScrollable = false): Header {
    return {
        id: '0',
        scrollable: headerScrollable,
        title: 'Product',
        type: 'PRODUCT',
        product: product(),
        primary_button: {
            title: 'In winkelwagentje',
            action: action({
                id: 'action-buy',
                type: 'PRODUCT_BUY',
                title: 'In winkelwagentje',
                title_remove: 'Verwijder',
            }),
        },
    };
}

export default function getProductScreen(
    type: ScreenType,
    header: (() => Product) | null = null,
    headerScrollable = false,
): Screen {
    return {
        id: 'screen-id-product',
        type,
        content: content({
            refreshable: true,
            scrollable: false,
            searchable: true,
            sections: [
                section({
                    title: header ? 'Vergelijkbare producten' : 'Producten',
                    components: [
                        component({
                            id: '0',
                            type: 'PRODUCT',
                            searchable: 'Energy drink',
                            product: products.energy(),
                            action: action({
                                id: 'action-0',
                                type: 'NAVIGATION_LINK',
                                url: 'energy',
                            }),
                        }),
                        component({
                            id: '1',
                            type: 'PRODUCT',
                            searchable: 'Poke bowl',
                            product: products.pokebowl(),
                            action: action({
                                id: 'action-1',
                                type: 'NAVIGATION_LINK',
                                url: 'pokebowl',
                            }),
                        }),
                        component({
                            id: '2',
                            type: 'PRODUCT',
                            searchable: 'Spare Ribs',
                            product: products.spareribs(),
                            action: action({
                                id: 'action-2',
                                type: 'NAVIGATION_LINK',
                                url: 'spareribs',
                            }),
                        }),
                        component({
                            id: '3',
                            type: 'PRODUCT',
                            searchable: 'Hamburger',
                            product: products.hamburger(),
                            action: action({
                                id: 'action-3',
                                type: 'NAVIGATION_LINK',
                                url: 'hamburger',
                            }),
                        }),
                    ],
                }),
            ],
        }),
        ...(header ? { header: productHeader(header, headerScrollable) } : {}),
    };
}