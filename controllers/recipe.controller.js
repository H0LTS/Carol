const recipeService = require('../services/recipe.service')


module.exports = {
    addRecipe,
    getRecipes,
    deleteRecipe,
    updateRecipe
};

function getUserIdFromHeader(header) {
    const payload = header.authorization.split('.')[1];
    const json = JSON.parse(atob(payload));
    return json.sub;
}

function addRecipe(req, res, next) {
    recipeService.addRecipe(req.body, getUserIdFromHeader(req.headers))
        .then(() => res.json('Recipe Added'))
        .catch(err => next(err));
}

function getRecipes(req, res, next) {
    recipeService.getRecipes(getUserIdFromHeader(req.headers))
        .then(success => res.json(success))
        .catch(err => next(err));
}

function deleteRecipe(req, res, next) {
    recipeService.deleteRecipe(req.params.recipename, getUserIdFromHeader(req.headers))
        .then(() => res.json('Recipe Deleted'))
        .catch(err => next(err));
}

function updateRecipe(req, res, next) {
    recipeService.updateRecipe(req.body, getUserIdFromHeader(req.headers))
        .then(() => res.json('Recipe Updated'))
        .catch(err => next(err));
}