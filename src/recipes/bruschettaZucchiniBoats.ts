import { IngredientName, Recipe, Unit } from '../types';

const recipe: Recipe = {
    name: 'bruschetta zucchini boats',
    ingredients: [
        {
            name: IngredientName.ZUCCHINI,
            quantity: 2,
            unit: Unit.INTEGER,
        },
        {
            name: IngredientName.ITALIAN_SEASONING,
            quantity: 1,
            unit: Unit.TBSP,
        },
        {
            name: IngredientName.GARLIC_CLOVE,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            name: IngredientName.ROMA_TOMATOES,
            quantity: 2,
            unit: Unit.INTEGER,
        },
        {
            name: IngredientName.ISRAELI_COUSCOUS,
            quantity: 5,
            unit: Unit.OZ,
        },
        {
            name: IngredientName.VEGETABLE_STOCK_CONCENTRATE,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            name: IngredientName.PARMESAN_CHEESE,
            quantity: 0.25,
            unit: Unit.CUP,
        },
        {
            name: IngredientName.BALSAMIC_GLAZE,
            quantity: 1,
            unit: Unit.TBSP,
        },
        {
            name: IngredientName.CHILI_FLAKES,
            quantity: 1,
            unit: Unit.TSP,
        },
        {
            name: IngredientName.MOZZARELLA_CHEESE,
            quantity: 0.5,
            unit: Unit.CUP,
        },
    ],
};

export default recipe;
