import { IngredientName, Recipe, Unit } from '../types';

const recipe: Recipe = {
    name: 'apricot, almond, & chickpea tagine',
    ingredients: [
        {
            name: IngredientName.YELLOW_ONION,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            name: IngredientName.CILANTRO,
            quantity: 0.25,
            unit: Unit.OZ,
        },
        {
            name: IngredientName.GARLIC_CLOVE,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            name: IngredientName.LEMON,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            name: IngredientName.JALAPENO,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            name: IngredientName.ZUCCHINI,
            quantity: 1,
            unit: Unit.INTEGER,
        },
        {
            name: IngredientName.CHICKPEAS,
            quantity: 13.4,
            unit: Unit.OZ,
        },
        {
            name: IngredientName.BASMATI_RICE,
            quantity: 0.5,
            unit: Unit.CUP,
        },
        {
            name: IngredientName.VEGETABLE_STOCK_CONCENTRATE,
            quantity: 2,
            unit: Unit.INTEGER,
        },
        {
            name: IngredientName.SOUR_CREAM,
            quantity: 4,
            unit: Unit.TBSP,
        },
        {
            name: IngredientName.TUNISIAN_SPICE_BLEND,
            quantity: 1,
            unit: Unit.TBSP,
        },
        {
            name: IngredientName.SLICED_ALMONDS,
            quantity: 0.5,
            unit: Unit.OZ,
        },
        {
            name: IngredientName.DRIED_APRICOTS,
            quantity: 1,
            unit: Unit.OZ,
        },
    ],
};

export default recipe;
