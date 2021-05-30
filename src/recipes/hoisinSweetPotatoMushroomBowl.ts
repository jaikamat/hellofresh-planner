import { Recipe, IngredientName, Unit } from '../types';

const recipe: Recipe = {
    name: 'hoisin sweet potato & mushroom bowl',
    ingredients: [
        {
            name: IngredientName.SCALLION,
            quantity: 2,
            unit: Unit.INTEGER,
        },
        {
            name: IngredientName.FRESH_GINGER,
            quantity: 1,
            unit: Unit.TBSP,
        },
        {
            name: IngredientName.SWEET_POTATO,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            name: IngredientName.CRIMINI_MUSHROOM,
            quantity: 8,
            unit: Unit.OZ,
        },
        {
            name: IngredientName.BELL_PEPPER,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            name: IngredientName.JASMINE_RICE,
            quantity: 0.75,
            unit: Unit.CUP,
        },
        {
            name: IngredientName.HOISIN_SAUCE,
            quantity: 2,
            unit: Unit.TBSP,
        },
        {
            name: IngredientName.MAYONNAISE,
            quantity: 2,
            unit: Unit.TBSP,
        },
        {
            name: IngredientName.SOUR_CREAM,
            quantity: 2,
            unit: Unit.TBSP,
        },
        {
            name: IngredientName.SRIRACHA,
            quantity: 1,
            unit: Unit.TSP,
        },
    ],
};

export default recipe;
