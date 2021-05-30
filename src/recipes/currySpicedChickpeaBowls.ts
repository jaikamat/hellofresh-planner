import { IngredientName, Recipe, Unit } from '../types';

const recipe: Recipe = {
    name: 'curry-spiced chickpea bowls',
    ingredients: [
        {
            name: IngredientName.GARLIC_CLOVE,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            name: IngredientName.CARROT,
            quantity: 6,
            unit: Unit.OZ,
        },
        {
            name: IngredientName.RED_ONION,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            name: IngredientName.BASMATI_RICE,
            quantity: 0.5,
            unit: Unit.CUP,
        },
        // Find measurement for this from HF
        {
            name: IngredientName.VEGETABLE_STOCK_CONCENTRATE,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            name: IngredientName.CHICKPEAS,
            quantity: 13.4,
            unit: Unit.OZ,
        },
        {
            name: IngredientName.CURRY_POWDER,
            quantity: 1,
            unit: Unit.TBSP,
        },
        {
            name: IngredientName.GRAPE_TOMATOES,
            quantity: 4,
            unit: Unit.OZ,
        },
        {
            name: IngredientName.PERSIAN_CUCUMBER,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            name: IngredientName.CILANTRO,
            quantity: 0.25,
            unit: Unit.OZ,
        },
        {
            name: IngredientName.LEMON,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            name: IngredientName.CHILI_PEPPER_FRESH,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            name: IngredientName.YOGURT,
            quantity: 4,
            unit: Unit.TBSP,
        },
        {
            name: IngredientName.SOUR_CREAM,
            quantity: 2,
            unit: Unit.TBSP,
        },
    ],
};

export default recipe;
