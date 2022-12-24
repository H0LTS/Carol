const db = require('../_helpers/database');
const Ingredient = db.Ingredient;



module.exports = {
    addIngredient,
    getIngredients,
    deleteIngredient,
    incrementIngredient,
    decrementIngredient
}

async function addIngredient(ingredient, userId) {
    if (await Ingredient.findOne({name: ingredient.name, userId: userId})) {
        throw `Ingredient: ${ingredient.name} already exists!`;
    }
    const newIngredient = new Ingredient(ingredient);
    newIngredient.userId = userId;
    return await newIngredient.save()
}

async function getIngredients(userId) {
    return await Ingredient.find({userId: userId});
}

async function deleteIngredient(name, userId) {
    let res = await Ingredient.findOneAndDelete({name: name, userId: userId});
    if (res) {
        return res;
    }
    else throw `Ingredient: ${name} does not exist!`;
}

async function incrementIngredient(ingredient, userId) {
    return await Ingredient.updateOne({name: ingredient.name, userId: userId},
        { $set: {number: ingredient.number + 1}});
}

async function decrementIngredient(ingredient, userId) {
    return await Ingredient.updateOne({name: ingredient.name, userId: userId},
        { $set: {number: ingredient.number - 1}});
}