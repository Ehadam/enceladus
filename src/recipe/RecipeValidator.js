const recipeValidator = (recipe) => {
  let isValid = true;
  if (!recipe.title) {
    isValid = false;
  }

  return isValid;
}

module.exports = recipeValidator;