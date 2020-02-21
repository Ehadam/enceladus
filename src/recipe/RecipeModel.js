const mongoose = require('mongoose');

const recipeSchema = mongoose.Schema({
  title: String
});

const RecipeModel = mongoose.model('Recipe', recipeSchema, 'Recipes');

module.exports = RecipeModel;