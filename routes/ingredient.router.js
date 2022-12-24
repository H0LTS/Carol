const express = require('express');
const router = express.Router();
const ingredientController = require('../controllers/ingredient.controller');


router.post('/addingredient', ingredientController.addIngredient);
router.get('/getingredients', ingredientController.getIngredients);
router.post('/increment', ingredientController.incrementIngredient);
router.post('/decrement', ingredientController.decrementIngredients);
router.delete('/:ingredientname', ingredientController.deleteIngredient);


module.exports = router;
