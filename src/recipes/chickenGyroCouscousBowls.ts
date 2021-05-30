import { IngredientName, Recipe, Unit } from '../types';

const recipe: Recipe = {
    name: 'chicken gyro couscous bowls',
    ingredients: [
        {
            name: IngredientName.SHALLOT,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            name: IngredientName.ROMA_TOMATOES,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            name: IngredientName.PERSIAN_CUCUMBER,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            name: IngredientName.LEMON,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            name: IngredientName.DILL,
            quantity: 0.25,
            unit: Unit.OZ,
        },
        {
            name: IngredientName.ISRAELI_COUSCOUS,
            quantity: 2.5,
            unit: Unit.OZ,
        },
        {
            name: IngredientName.CHICKEN_STOCK_CONCENTRATE,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            name: IngredientName.CHICKEN_CUTLET,
            quantity: 10,
            unit: Unit.OZ,
        },
        {
            name: IngredientName.ZAATAR_SPICE_BLEND,
            quantity: 1,
            unit: Unit.TBSP,
        },
        {
            name: IngredientName.FETA_CHEESE,
            quantity: 0.5,
            unit: Unit.CUP,
        },
        {
            name: IngredientName.SOUR_CREAM,
            quantity: 2,
            unit: Unit.TBSP,
        },
        {
            name: IngredientName.HUMMUS,
            quantity: 4,
            unit: Unit.TBSP,
        },
    ],
};

export default recipe;
