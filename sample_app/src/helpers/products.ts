import {
    product,
} from '../../api';

import { Product } from '../../generated/models';

export function energy(): Product {
    return product({
        id: 'product-energy',
        content: 'Energy drink',
        image: 'https://cdn3.iconfinder.com/data/icons/food-emoji/50/EnergyDrink-512.png',
        category: 'DRINK',
    });
}

export function pokebowl(): Product {
    return product({
        id: 'product-pokebowl',
        content: 'Poke bowl',
        image: 'https://cdn3.iconfinder.com/data/icons/food-emoji/50/Salad-512.png',
        category: 'FOOD',
    });
}

export function spareribs(): Product {
    return product({
        id: 'product-spareribs',
        content: 'Spare ribs',
        image: 'https://cdn0.iconfinder.com/data/icons/meats-fish/512/Spare_ribs-512.png',
        category: 'FOOD',
    });
}

export function hamburger(): Product {
    return product({
        id: 'product-hamburger',
        content: 'Hamburger',
        image: 'https://cdn1.iconfinder.com/data/icons/kitchen-and-food-2/44/burger-512.png',
        category: 'FOOD',
    });
}
