import React from "react";
import RecipeAddIngredient from "./RecipeAddIngredient";
import RecipeDetail from "./RecipeDetail";
import "./RecipeForm.css";

function RecipeForm() {
  const getRecipeDetailHandler = (recipe) => {
    console.log(recipe);
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <RecipeDetail onGetRecipeDetail={getRecipeDetailHandler} />
      <RecipeAddIngredient />
    </form>
  );
}

export default RecipeForm;
