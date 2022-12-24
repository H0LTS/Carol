const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipe.controller');


router.post('/addrecipe', recipeController.addRecipe);
router.post('/updaterecipe', recipeController.updateRecipe);
router.get('/getrecipes', recipeController.getRecipes);
router.delete('/:recipename', recipeController.deleteRecipe);


module.exports = router;
