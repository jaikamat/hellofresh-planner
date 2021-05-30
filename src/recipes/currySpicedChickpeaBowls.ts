import { Food, Recipe, Unit } from '../types';

const recipe: Recipe = {
    name: 'curry-spiced chickpea bowls',
    ingredients: [
        {
            name: Food.GARLIC_CLOVE,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            name: Food.CARROT,
            quantity: 6,
            unit: Unit.OZ,
        },
        {
            name: Food.RED_ONION,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            name: Food.BASMATI_RICE,
            quantity: 0.5,
            unit: Unit.CUP,
        },
        // Find measurement for this from HF
        {
            name: Food.VEGETABLE_STOCK_CONCENTRATE,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            name: Food.CHICKPEAS,
            quantity: 13.4,
            unit: Unit.OZ,
        },
        {
            name: Food.CURRY_POWDER,
            quantity: 1,
            unit: Unit.TBSP,
        },
        {
            name: Food.GRAPE_TOMATOES,
            quantity: 4,
            unit: Unit.OZ,
        },
        {
            name: Food.PERSIAN_CUCUMBER,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            name: Food.CILANTRO,
            quantity: 0.25,
            unit: Unit.OZ,
        },
        {
            name: Food.LEMON,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            name: Food.CHILI_PEPPER_FRESH,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            name: Food.YOGURT,
            quantity: 4,
            unit: Unit.TBSP,
        },
        {
            name: Food.SOUR_CREAM,
            quantity: 2,
            unit: Unit.TBSP,
        },
    ],
};

export default recipe;
