const db = require('../_helpers/database');
const Recipe = db.Recipe;



module.exports = {
    addRecipe,
    getRecipes,
    deleteRecipe,
    updateRecipe
}

async function addRecipe(recipe, userId) {
    if (await Recipe.findOne({name: recipe.name, userId: userId})) {
        throw `Recipe: ${recipe.name} already exists!`;
    }
    const newRecipe = new Recipe(recipe);
    newRecipe.userId = userId;
    await newRecipe.save()
}

async function getRecipes(userId) {
    return await Recipe.find({userId: userId});
}

async function deleteRecipe(name, userId) {
    let res = await Recipe.findOneAndDelete({name: name, userId: userId});
    if (res) {
        return res;
    }
    else throw `Recipe: ${name} does not exist!`;
}

async function updateRecipe(recipe, userId) {
    return await Recipe.updateOne({name: recipe.name, userId: userId},
        { $set: {description: recipe.description,
                steps: recipe.steps,
                ingredientsNames: recipe.ingredientsNames,
                ingredientsAmounts: recipe.ingredientsAmounts,
                ingredientsUnits: recipe.ingredientsUnits}});
}