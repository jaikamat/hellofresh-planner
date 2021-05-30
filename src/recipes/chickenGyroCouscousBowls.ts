import { Food, Recipe, Unit } from '../types';

const recipe: Recipe = {
    name: 'chicken gyro couscous bowls',
    ingredients: [
        {
            name: Food.SHALLOT,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            name: Food.ROMA_TOMATOES,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            name: Food.PERSIAN_CUCUMBER,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            name: Food.LEMON,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            name: Food.DILL,
            quantity: 0.25,
            unit: Unit.OZ,
        },
        {
            name: Food.ISRAELI_COUSCOUS,
            quantity: 2.5,
            unit: Unit.OZ,
        },
        {
            name: Food.CHICKEN_STOCK_CONCENTRATE,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            name: Food.CHICKEN_CUTLET,
            quantity: 10,
            unit: Unit.OZ,
        },
        {
            name: Food.ZAATAR_SPICE_BLEND,
            quantity: 1,
            unit: Unit.TBSP,
        },
        {
            name: Food.FETA_CHEESE,
            quantity: 0.5,
            unit: Unit.CUP,
        },
        {
            name: Food.SOUR_CREAM,
            quantity: 2,
            unit: Unit.TBSP,
        },
        {
            name: Food.HUMMUS,
            quantity: 4,
            unit: Unit.TBSP,
        },
    ],
};

export default recipe;
