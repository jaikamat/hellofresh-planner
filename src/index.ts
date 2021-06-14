import { Unit, Recipe, Ingredient, FoodCategory } from './types';
import * as recipes from './recipes';
import { stringWidth, terminal } from 'terminal-kit';

/**
 * For each element in the recipe list
 * if it exists in output
 * add the qty
 * otherwise push it to output
 */
function createShoppingList(recipes: Recipe[]): Ingredient[] {
    const totalIngredients = recipes.reduce<Ingredient[]>(
        (acc, curr) => acc.concat(curr.ingredients),
        []
    );

    const output: Ingredient[] = [];

    totalIngredients.forEach((i) => {
        const ingredientLocation = output.findIndex(
            (o) => o.food.name === i.food.name
        );

        if (ingredientLocation > -1) {
            if (output[ingredientLocation].unit !== i.unit) {
                throw new Error(
                    `Unit mismatch detected in ingredient: ${i.food} | ${i.unit}, ${output[ingredientLocation].food} | ${output[ingredientLocation].unit}`
                );
            }
            output[ingredientLocation].quantity += i.quantity;
        } else {
            output.push(i);
        }
    });

    return output.sort((a, b) => a.food.name.localeCompare(b.food.name));
}

/**
 * Finds and replaces hyphens and replaces with strings, and correctly cases word
 */
function prettyFoodName(name: string) {
    const transformed = name
        .split('_')
        .map((s) => s.toLowerCase())
        .join(' ');

    return `${transformed.charAt(0).toUpperCase()}${transformed.slice(1)}`;
}

function formatOutput(ingredients: Ingredient[]): void {
    terminal.clear();
    Object.keys(FoodCategory).forEach((category) => {
        const categoryItems = ingredients.filter(
            (f) => f.food.category === category
        );
        if (categoryItems.length > 0) {
            terminal.bold(`---${category}---`);
            terminal.nextLine(1);
            categoryItems.forEach((f) => {
                const unit = f.unit === Unit.INTEGER ? '' : ` ${f.unit}`;
                terminal.defaultColor(`${f.quantity}${unit} `);
                terminal.defaultColor(`${prettyFoodName(f.food.name)}`);
                terminal.nextLine(1);
            });
            terminal.nextLine(1);
        }
    });
    terminal.bell();
}

// This should be dynamic based on user
(function init() {
    const list = createShoppingList([
        recipes.apricotAlmondChickpeaTagine,
        recipes.chickpeaPoweredMediterraneanCouscous,
        recipes.bruschettaZucchiniBoats,
        recipes.surfsUpChickenRiceBowl,
        recipes.hoisinSweetPotatoMushroomBowl,
    ]);

    formatOutput(list);
})();
