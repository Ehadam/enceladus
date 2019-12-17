const express = require('express');
const RecipeModel = require('./recipe/RecipeModel.js');
const recipeValidator = require('./recipe/RecipeValidator.js');

const app = express();

app.use(express.json());

app.get('/recipes/', (request, response) => {
  RecipeModel.find((error, recipes) => {
    if (error) {
      response.status(500).send();
    } else {
      response
        .type('application/json')
        .status(200)
        .send(recipes);
    }
  });
});

app.post('/recipes/', (request, response) => {
  if (recipeValidator(request.body)) {
    const newRecipe = new RecipeModel(request.body);
    newRecipe.save((error, recipe) => {
      if (error) {
        console.log('An error occurred saving the new recipe:' + error);
        response.status(500);
      } else {
        console.log(recipe.title + ' saved to recipe collection.');
        response.status(204);
      }
    });
  } else {
    response.status(400);
  }

  response.send();
});

module.exports = app;