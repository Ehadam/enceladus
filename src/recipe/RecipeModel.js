const mongoose = require('../MongooseProvider.js');

const recipeSchema = mongoose.Schema({
  title: String
});

const RecipeModel = mongoose.model('Recipe', recipeSchema, 'Recipe');

module.exports = RecipeModel;