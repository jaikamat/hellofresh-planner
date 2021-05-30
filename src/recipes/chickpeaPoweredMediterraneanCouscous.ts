import { IngredientName, Recipe, Unit } from '../types';

const recipe: Recipe = {
    name: 'chickpea-powered mediterranean couscous',
    ingredients: [
        {
            name: IngredientName.ZUCCHINI,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            name: IngredientName.GRAPE_TOMATOES,
            quantity: 4,
            unit: Unit.OZ,
        },
        {
            name: IngredientName.THYME,
            quantity: 0.25,
            unit: Unit.OZ,
        },
        {
            name: IngredientName.GARLIC_CLOVE,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            name: IngredientName.SCALLION,
            quantity: 2,
            unit: Unit.INTEGER,
        },
        {
            name: IngredientName.LEMON,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            name: IngredientName.CHICKPEAS,
            quantity: 13.4,
            unit: Unit.OZ,
        },
        {
            name: IngredientName.SMOKED_PAPRIKA,
            quantity: 1,
            unit: Unit.TSP,
        },
        {
            name: IngredientName.ISRAELI_COUSCOUS,
            quantity: 0.75,
            unit: Unit.CUP,
        },
        {
            name: IngredientName.VEGETABLE_STOCK_CONCENTRATE,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            name: IngredientName.FETA_CHEESE,
            quantity: 0.5,
            unit: Unit.CUP,
        },
    ],
};

export default recipe;
