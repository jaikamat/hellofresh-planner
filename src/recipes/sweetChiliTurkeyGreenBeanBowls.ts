import { IngredientName, Recipe, Unit } from '../types';

const recipe: Recipe = {
    name: 'sweet chili turkey & green bean bowls',
    ingredients: [
        {
            name: IngredientName.JASMINE_RICE,
            quantity: 0.75,
            unit: Unit.CUP,
        },
        {
            name: IngredientName.GREEN_BEANS,
            quantity: 6,
            unit: Unit.OZ,
        },
        {
            name: IngredientName.LIME,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            name: IngredientName.CILANTRO,
            quantity: 0.25,
            unit: Unit.OZ,
        },
        {
            name: IngredientName.GROUND_TURKEY,
            quantity: 10,
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
        // Find measurement for this from HF
        {
            name: IngredientName.CRISPY_FRIED_ONIONS,
            quantity: 1,
            unit: Unit.INTEGER,
        },
    ],
};

export default recipe;
