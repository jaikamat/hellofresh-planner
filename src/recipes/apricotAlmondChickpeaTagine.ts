import { Food, Recipe, Unit } from '../types';

const recipe: Recipe = {
    name: 'apricot, almond, & chickpea tagine',
    ingredients: [
        {
            name: Food.YELLOW_ONION,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            name: Food.CILANTRO,
            quantity: 0.25,
            unit: Unit.OZ,
        },
        {
            name: Food.GARLIC_CLOVE,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            name: Food.LEMON,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            name: Food.JALAPENO,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            name: Food.ZUCCHINI,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            name: Food.CHICKPEAS,
            quantity: 13.4,
            unit: Unit.OZ,
        },
        {
            name: Food.BASMATI_RICE,
            quantity: 0.5,
            unit: Unit.CUP,
        },
        {
            name: Food.VEGETABLE_STOCK_CONCENTRATE,
            quantity: 2,
            unit: Unit.INTEGER,
        },
        {
            name: Food.SOUR_CREAM,
            quantity: 4,
            unit: Unit.TBSP,
        },
        {
            name: Food.TUNISIAN_SPICE_BLEND,
            quantity: 1,
            unit: Unit.TBSP,
        },
        {
            name: Food.SLICED_ALMONDS,
            quantity: 0.5,
            unit: Unit.OZ,
        },
        {
            name: Food.DRIED_APRICOTS,
            quantity: 1,
            unit: Unit.OZ,
        },
    ],
};

export default recipe;
