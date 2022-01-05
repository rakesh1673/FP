import React, { useState } from "react";
import Select from "../UI/Select";
import "./RecipeDetail.css";

const mealType = [
  { value: "breakfast", label: "Breakfast" },
  { value: "lunch", label: "Lunch" },
  { value: "dinner", label: "Dinner" },
  { value: "snack", label: "Snack" },
];

const cuisine = [
  { value: "northindian", label: "North Indian" },
  { value: "southindian", label: "South Indian" },
  { value: "chinese", label: "Chinese" },
  { value: "italian", label: "Italian" },
];

function RecipeDetail(props) {
  const [enteredRecipeName, setEnteredRecipeName] = useState("");
  const [enteredMealType, setEnteredMealType] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredCuisine, setEnteredCuisine] = useState("");

  const recipeNameChangeHandler = (event) => {
    setEnteredRecipeName(event.target.value);
  };

  const mealTypeChangeHandler = (event) => {
    setEnteredMealType(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const cuisineChangeHandler = (event) => {
    setEnteredCuisine(event.target.value);
  };

  props.onGetRecipeDetail(() => {
    const recipeDetail = {
      name: enteredRecipeName,
      type: enteredMealType,
      description: enteredDescription,
      cuisine: enteredCuisine,
    };

    return recipeDetail;
  });

  return (
    <div className="recipe-form__full-controls">
      <div className="recipe-form__controls">
        <div className="recipe-form__control">
          <label>Recipe Name</label>
          <input type="text" onChange={recipeNameChangeHandler} />
        </div>
        <Select
          label="Type of Meal"
          options={mealType}
          className="recipe-form__control"
        />
        <div className="recipe-form__control">
          <label>Description</label>
          <input type="text" onChange={descriptionChangeHandler} />
        </div>
        <Select
          label="Cuisine"
          options={cuisine}
          className="recipe-form__control"
        />
      </div>
      <div className="recipe-form__control-image">
        <img
          className="recipe-form__img"
          src="https://www.indianhealthyrecipes.com/wp-content/uploads/2018/07/tomato-upma-recipe.jpg"
        />
      </div>
    </div>
  );
}

export default RecipeDetail;
