import { Food, Recipe, Unit } from '../types';

const recipe: Recipe = {
    name: 'sweet chili roasted veg bowls',
    ingredients: [
        {
            name: Food.SWEET_POTATO,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            name: Food.BUTTON_MUSHROOMS,
            quantity: 8,
            unit: Unit.OZ,
        },
        {
            name: Food.GARLIC_POWDER,
            quantity: 1,
            unit: Unit.TSP,
        },
        {
            name: Food.JASMINE_RICE,
            quantity: 0.5,
            unit: Unit.CUP,
        },
        {
            name: Food.MAYONNAISE,
            quantity: 2,
            unit: Unit.TBSP,
        },
        {
            name: Food.CILANTRO,
            quantity: 0.25,
            unit: Unit.OZ,
        },
        {
            name: Food.SWEET_SOY_GLAZE,
            quantity: 4,
            unit: Unit.TBSP,
        },
        {
            name: Food.SWEET_THAI_CHILI_SAUCE,
            quantity: 1,
            unit: Unit.OZ,
        },
        {
            name: Food.RICE_WINE_VINEGAR,
            quantity: 1,
            unit: Unit.TBSP,
        },
        {
            name: Food.COLESLAW_MIX,
            quantity: 4,
            unit: Unit.OZ,
        },
        {
            name: Food.CRISPY_FRIED_ONIONS,
            quantity: 1,
            unit: Unit.INTEGER,
        },
    ],
};

export default recipe;
