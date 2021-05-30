import { Food, Recipe, Unit } from '../types';

const recipe: Recipe = {
    name: 'sweet chili turkey & green bean bowls',
    ingredients: [
        {
            name: Food.JASMINE_RICE,
            quantity: 0.75,
            unit: Unit.CUP,
        },
        {
            name: Food.GREEN_BEANS,
            quantity: 6,
            unit: Unit.OZ,
        },
        {
            name: Food.LIME,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            name: Food.CILANTRO,
            quantity: 0.25,
            unit: Unit.OZ,
        },
        {
            name: Food.GROUND_TURKEY,
            quantity: 10,
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
        // Find measurement for this from HF
        {
            name: Food.CRISPY_FRIED_ONIONS,
            quantity: 1,
            unit: Unit.INTEGER,
        },
    ],
};

export default recipe;
