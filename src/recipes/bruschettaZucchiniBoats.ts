import { Food, Recipe, Unit } from '../types';

const recipe: Recipe = {
    name: 'bruschetta zucchini boats',
    ingredients: [
        {
            name: Food.ZUCCHINI,
            quantity: 2,
            unit: Unit.INTEGER,
        },
        {
            name: Food.ITALIAN_SEASONING,
            quantity: 1,
            unit: Unit.TBSP,
        },
        {
            name: Food.GARLIC_CLOVE,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            name: Food.ROMA_TOMATOES,
            quantity: 2,
            unit: Unit.INTEGER,
        },
        {
            name: Food.ISRAELI_COUSCOUS,
            quantity: 5,
            unit: Unit.OZ,
        },
        {
            name: Food.VEGETABLE_STOCK_CONCENTRATE,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            name: Food.PARMESAN_CHEESE,
            quantity: 0.25,
            unit: Unit.CUP,
        },
        {
            name: Food.BALSAMIC_GLAZE,
            quantity: 1,
            unit: Unit.TBSP,
        },
        {
            name: Food.CHILI_FLAKES,
            quantity: 1,
            unit: Unit.TSP,
        },
        {
            name: Food.MOZZARELLA_CHEESE,
            quantity: 0.5,
            unit: Unit.CUP,
        },
    ],
};

export default recipe;
