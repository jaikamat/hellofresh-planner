import { Recipe, IngredientName, Unit } from '../types';

const recipe: Recipe = {
    name: 'crunchy curried chickpea bowls',
    ingredients: [
        {
            name: IngredientName.CHICKPEAS,
            quantity: 13.4,
            unit: Unit.OZ,
        },
        {
            name: IngredientName.CARROT,
            quantity: 3,
            unit: Unit.OZ,
        },
        {
            name: IngredientName.LEMON,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            name: IngredientName.KALE,
            quantity: 4,
            unit: Unit.OZ,
        },
        {
            name: IngredientName.GOLDEN_RAISINS,
            quantity: 1,
            unit: Unit.OZ,
        },
        {
            name: IngredientName.CURRY_POWDER,
            quantity: 1,
            unit: Unit.TBSP,
        },
        {
            name: IngredientName.BASMATI_RICE,
            quantity: 0.5,
            unit: Unit.CUP,
        },
        {
            name: IngredientName.VEGETABLE_STOCK_CONCENTRATE,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            name: IngredientName.SHREDDED_RED_CABBAGE,
            quantity: 4,
            unit: Unit.OZ,
        },
        {
            name: IngredientName.SOUR_CREAM,
            quantity: 6,
            unit: Unit.TBSP,
        },
    ],
};

export default recipe;
