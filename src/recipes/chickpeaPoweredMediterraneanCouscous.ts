import { Food, Recipe, Unit } from '../types';

const recipe: Recipe = {
    name: 'chickpea-powered mediterranean couscous',
    ingredients: [
        {
            name: Food.ZUCCHINI,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            name: Food.GRAPE_TOMATOES,
            quantity: 4,
            unit: Unit.OZ,
        },
        {
            name: Food.THYME,
            quantity: 0.25,
            unit: Unit.OZ,
        },
        {
            name: Food.GARLIC_CLOVE,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            name: Food.SCALLION,
            quantity: 2,
            unit: Unit.INTEGER,
        },
        {
            name: Food.LEMON,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            name: Food.CHICKPEAS,
            quantity: 13.4,
            unit: Unit.OZ,
        },
        {
            name: Food.SMOKED_PAPRIKA,
            quantity: 1,
            unit: Unit.TSP,
        },
        {
            name: Food.ISRAELI_COUSCOUS,
            quantity: 0.75,
            unit: Unit.CUP,
        },
        {
            name: Food.VEGETABLE_STOCK_CONCENTRATE,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            name: Food.FETA_CHEESE,
            quantity: 0.5,
            unit: Unit.CUP,
        },
    ],
};

export default recipe;
