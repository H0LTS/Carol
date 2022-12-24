const ingredientService = require('../services/ingredient.service')
const {sign} = require("jsonwebtoken");


module.exports = {
    addIngredient,
    getIngredients,
    deleteIngredient,
    incrementIngredient,
    decrementIngredients
};

function getUserIdFromHeader(header) {
    const payload = header.authorization.split('.')[1];
    const json = JSON.parse(atob(payload));
    return json.sub;
}

function addIngredient(req, res, next) {
    ingredientService.addIngredient(req.body, getUserIdFromHeader(req.headers))
        .then(() => res.json('Ingredient Added'))
        .catch(err => next(err));
}

function getIngredients(req, res, next) {
    ingredientService.getIngredients(getUserIdFromHeader(req.headers))
        .then(success => res.json(success))
        .catch(err => next(err));
}

function deleteIngredient(req, res, next) {
    ingredientService.deleteIngredient(req.params.ingredientname, getUserIdFromHeader(req.headers))
        .then(() => res.json('Ingredient Deleted'))
        .catch(err => next(err));
}

function incrementIngredient(req, res, next) {
    ingredientService.incrementIngredient(req.body, getUserIdFromHeader(req.headers))
        .then(() => res.json('Ingredient Incremented'))
        .catch(err => next(err));
}

function decrementIngredients(req, res, next) {
    ingredientService.decrementIngredient(req.body, getUserIdFromHeader(req.headers))
        .then(() => res.json('Ingredient Decremented'))
        .catch(err => next(err));
}