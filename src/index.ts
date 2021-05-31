import { Unit, Recipe, Ingredient, FoodCategory } from './types';
import * as recipes from './recipes';
import { terminal } from 'terminal-kit';

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
                throw new Error('unit mismatch detected in ingredient!');
            }
            output[ingredientLocation].quantity += i.quantity;
        } else {
            output.push(i);
        }
    });

    return output.sort((a, b) => a.food.name.localeCompare(b.food.name));
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
                terminal.italic(`${f.food.name}`);
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
        recipes.currySpicedChickpeaBowls,
        recipes.sweetChiliTurkeyGreenBeanBowls,
        recipes.apricotAlmondChickpeaTagine,
        recipes.apricotAlmondChickpeaTagine,
    ]);

    formatOutput(list);
})();
