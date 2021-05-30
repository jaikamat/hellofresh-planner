import { Recipe, Food, Unit } from '../types';

const recipe: Recipe = {
    name: 'crunchy curried chickpea bowls',
    ingredients: [
        {
            name: Food.CHICKPEAS,
            quantity: 13.4,
            unit: Unit.OZ,
        },
        {
            name: Food.CARROT,
            quantity: 3,
            unit: Unit.OZ,
        },
        {
            name: Food.LEMON,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            name: Food.KALE,
            quantity: 4,
            unit: Unit.OZ,
        },
        {
            name: Food.GOLDEN_RAISINS,
            quantity: 1,
            unit: Unit.OZ,
        },
        {
            name: Food.CURRY_POWDER,
            quantity: 1,
            unit: Unit.TBSP,
        },
        {
            name: Food.BASMATI_RICE,
            quantity: 0.5,
            unit: Unit.CUP,
        },
        {
            name: Food.VEGETABLE_STOCK_CONCENTRATE,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            name: Food.SHREDDED_RED_CABBAGE,
            quantity: 4,
            unit: Unit.OZ,
        },
        {
            name: Food.SOUR_CREAM,
            quantity: 6,
            unit: Unit.TBSP,
        },
    ],
};

export default recipe;
