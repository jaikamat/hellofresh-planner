import { Food, Recipe, Unit } from '../types';

const recipe: Recipe = {
    name: 'surfs up chicken & rice bowl',
    ingredients: [
        {
            name: Food.SCALLION,
            quantity: 2,
            unit: Unit.INTEGER,
        },
        {
            name: Food.JASMINE_RICE,
            quantity: 0.75,
            unit: Unit.CUP,
        },
        {
            name: Food.ROMA_TOMATOES,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            name: Food.KIWI,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            name: Food.LIME,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            name: Food.SOUR_CREAM,
            quantity: 4,
            unit: Unit.TBSP,
        },
        {
            name: Food.CHIPOTLE_POWDER,
            quantity: 1,
            unit: Unit.TSP,
        },
        {
            name: Food.CHICKEN_BREAST,
            quantity: 10,
            unit: Unit.OZ,
        },
        {
            name: Food.SOUTHWEST_SPICE_BLEND,
            quantity: 1,
            unit: Unit.TBSP,
        },
        {
            name: Food.CHICKEN_STOCK_CONCENTRATE,
            quantity: 1,
            unit: Unit.INTEGER,
        },
    ],
};

export default recipe;
