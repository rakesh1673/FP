import React from "react";
import RecipeForm from "./RecipeForm";

import "./Recipe.css";
import RecipeIngredient from "./RecipeIngredient";
import Card from "../UI/Card";

function Recipe() {
  return (
    <Card className="recipe">
      <RecipeForm />
      <div className="recipe-ingredient">
        <RecipeIngredient />
        <RecipeIngredient />
        <RecipeIngredient />
        <RecipeIngredient />
        <RecipeIngredient />
        <RecipeIngredient />
        <RecipeIngredient />
      </div>
    </Card>
  );
}

export default Recipe;
