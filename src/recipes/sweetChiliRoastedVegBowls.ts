import { IngredientName, Recipe, Unit } from '../types';

const recipe: Recipe = {
    name: 'sweet chili roasted veg bowls',
    ingredients: [
        {
            name: IngredientName.SWEET_POTATO,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            name: IngredientName.BUTTON_MUSHROOMS,
            quantity: 8,
            unit: Unit.OZ,
        },
        {
            name: IngredientName.GARLIC_POWDER,
            quantity: 1,
            unit: Unit.TSP,
        },
        {
            name: IngredientName.JASMINE_RICE,
            quantity: 0.5,
            unit: Unit.CUP,
        },
        {
            name: IngredientName.MAYONNAISE,
            quantity: 2,
            unit: Unit.TBSP,
        },
        {
            name: IngredientName.CILANTRO,
            quantity: 0.25,
            unit: Unit.OZ,
        },
        {
            name: IngredientName.SWEET_SOY_GLAZE,
            quantity: 4,
            unit: Unit.TBSP,
        },
        {
            name: IngredientName.SWEET_THAI_CHILI_SAUCE,
            quantity: 1,
            unit: Unit.OZ,
        },
        {
            name: IngredientName.RICE_WINE_VINEGAR,
            quantity: 1,
            unit: Unit.TBSP,
        },
        {
            name: IngredientName.COLESLAW_MIX,
            quantity: 4,
            unit: Unit.OZ,
        },
        {
            name: IngredientName.CRISPY_FRIED_ONIONS,
            quantity: 1,
            unit: Unit.INTEGER,
        },
    ],
};

export default recipe;
