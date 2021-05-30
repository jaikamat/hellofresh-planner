import { IngredientName, Recipe, Unit } from '../types';

const recipe: Recipe = {
    name: 'surfs up chicken & rice bowl',
    ingredients: [
        {
            name: IngredientName.SCALLION,
            quantity: 2,
            unit: Unit.INTEGER,
        },
        {
            name: IngredientName.JASMINE_RICE,
            quantity: 0.75,
            unit: Unit.CUP,
        },
        {
            name: IngredientName.ROMA_TOMATOES,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            name: IngredientName.KIWI,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            name: IngredientName.LIME,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            name: IngredientName.SOUR_CREAM,
            quantity: 4,
            unit: Unit.TBSP,
        },
        {
            name: IngredientName.CHIPOTLE_POWDER,
            quantity: 1,
            unit: Unit.TSP,
        },
        {
            name: IngredientName.CHICKEN_BREAST,
            quantity: 10,
            unit: Unit.OZ,
        },
        {
            name: IngredientName.SOUTHWEST_SPICE_BLEND,
            quantity: 1,
            unit: Unit.TBSP,
        },
        {
            name: IngredientName.CHICKEN_STOCK_CONCENTRATE,
            quantity: 1,
            unit: Unit.INTEGER,
        },
    ],
};

export default recipe;
