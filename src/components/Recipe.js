import React, { useState } from "react";
import RecipeForm from "./RecipeEditor/RecipeForm";
import RecipeIngredient from "./RecipeIngredient/RecipeIngredient";

import "./Recipe.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import RecipeIngredientList from "./RecipeIngredient/RecipeIngredientList";
import RecipeProgressTime from "./RecipeProgressTime/RecipeProgressTime";

const DUMMY_INGREDIENTS = [
  {
    id: 1,
    ingredient: "Chicken",
    quantity: 1,
    process: "boil",
    time: 10,
  },
  {
    id: 2,
    ingredient: "Salt",
    quantity: 2,
    process: "soak",
    time: 1,
  },
  {
    id: 3,
    ingredient: "Spices",
    quantity: 5,
    process: "fry",
    time: 5,
  },
];

function Recipe() {
  const [ingredients, setIngredients] = useState(DUMMY_INGREDIENTS);

  const saveIngredientDataHandler = (enteredIngredientData) => {
    console.log(enteredIngredientData);

    const ingredientData = {
      ...enteredIngredientData,
      id: Math.random().toString(),
    };

    setIngredients((prevIngredients) => {
      return [...prevIngredients, ingredientData];
    });
  };

  return (
    <div className="total-recipe-section">
      <div className="features">
        <Button text="New Recipe" className="new-recipe-btn" />
        <Button text="Recent Recipe" />
        <Button text="Favourite" />
      </div>
      <Card className="recipe">
        <RecipeForm onSaveIngredientData={saveIngredientDataHandler} />
        <div className="ingredient-time">
          <RecipeIngredientList items={ingredients} />
          <RecipeProgressTime />
        </div>
      </Card>
    </div>
  );
}

export default Recipe;
