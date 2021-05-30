import { Recipe, Food, Unit } from '../types';

const recipe: Recipe = {
    name: 'hoisin sweet potato & mushroom bowl',
    ingredients: [
        {
            name: Food.SCALLION,
            quantity: 2,
            unit: Unit.INTEGER,
        },
        {
            name: Food.FRESH_GINGER,
            quantity: 1,
            unit: Unit.TBSP,
        },
        {
            name: Food.SWEET_POTATO,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            name: Food.CRIMINI_MUSHROOM,
            quantity: 8,
            unit: Unit.OZ,
        },
        {
            name: Food.BELL_PEPPER,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            name: Food.JASMINE_RICE,
            quantity: 0.75,
            unit: Unit.CUP,
        },
        {
            name: Food.HOISIN_SAUCE,
            quantity: 2,
            unit: Unit.TBSP,
        },
        {
            name: Food.MAYONNAISE,
            quantity: 2,
            unit: Unit.TBSP,
        },
        {
            name: Food.SOUR_CREAM,
            quantity: 2,
            unit: Unit.TBSP,
        },
        {
            name: Food.SRIRACHA,
            quantity: 1,
            unit: Unit.TSP,
        },
    ],
};

export default recipe;
