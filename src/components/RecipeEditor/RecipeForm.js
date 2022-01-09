import React, { useState } from "react";
import Input from "../../UI/Input";
import Select from "../../UI/Select";
import Button from "../../UI/Button";
import "./RecipeForm.css";

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

const quantity = [
  { value: "", label: "Qty" },
  { value: "10", label: "10" },
  { value: "20", label: "20" },
  { value: "30", label: "30" },
  { value: "50", label: "50" },
  { value: "100", label: "100" },
  { value: "150", label: "150" },
  { value: "200", label: "200" },
  { value: "250", label: "250" },
  { value: "300", label: "300" },
  { value: "500", label: "500" },
  { value: "1000", label: "1000" },
];

const process = [
  { value: "", label: "Process" },
  { value: "boil", label: "Boil" },
  { value: "fry", label: "Fry" },
  { value: "soak", label: "Soak" },
  { value: "bake", label: "Bake" },
];

const time = [
  { value: "", label: "Time" },
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "5", label: "5" },
  { value: "10", label: "10" },
  { value: "20", label: "20" },
  { value: "30", label: "30" },
  { value: "60", label: "60" },
];

function RecipeForm(props) {
  const [enteredRecipeName, setEnteredRecipeName] = useState("");
  const [enteredMealType, setEnteredMealType] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredCuisine, setEnteredCuisine] = useState("");

  const [enteredIngredient, setEnteredIngredient] = useState("");
  const [enteredQuantity, setEnteredQuantity] = useState("");
  const [enteredProcess, setEnteredProcess] = useState("");
  const [enteredTime, setEnteredTime] = useState("");

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

  const ingredientChangeHandler = (event) => {
    setEnteredIngredient(event.target.value);
  };

  const quantityChangeHandler = (event) => {
    setEnteredQuantity(event.target.value);
  };

  const processChangeHandler = (event) => {
    setEnteredProcess(event.target.value);
  };

  const timeChangeHandler = (event) => {
    setEnteredTime(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // const recipeData = {
    //   recipeName: enteredRecipeName,
    //   mealType: enteredMealType,
    //   description: enteredDescription,
    //   cuisine: enteredCuisine,
    //   ingredients: [
    //     {
    //       ingredient: enteredIngredient,
    //       quantity: enteredQuantity,
    //       process: enteredProcess,
    //       time: enteredTime,
    //     },
    //   ],
    // };

    const ingredientData = {
      ingredient: enteredIngredient,
      quantity: enteredQuantity,
      process: enteredProcess,
      time: enteredTime,
    };

    props.onSaveIngredientData(ingredientData);
    setEnteredIngredient("");
    setEnteredQuantity("");
    setEnteredProcess("");
    setEnteredTime("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="recipe-form__full-controls">
        <div className="recipe-form__controls">
          <Input
            label="Recipe Name"
            type="text"
            className="recipe-form__control"
            onChange={recipeNameChangeHandler}
          />
          <Select
            label="Type of Meal"
            options={mealType}
            className="recipe-form__control"
            onChange={mealTypeChangeHandler}
          />
          <Input
            type="text"
            label="Description"
            className="recipe-form__control"
            onChange={descriptionChangeHandler}
          />
          <Select
            label="Cuisine"
            options={cuisine}
            className="recipe-form__control"
            onChange={cuisineChangeHandler}
          />
        </div>
        <div className="recipe-form__control-image">
          <img
            className="recipe-form__img"
            src="https://www.indianhealthyrecipes.com/wp-content/uploads/2018/07/tomato-upma-recipe.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="recipe-form__ingredients-control">
        <p>Create Recipe</p>
        <div className="recipe-form__ingredients">
          <Input
            type="text"
            className="recipe-form__ingredient"
            placeholder="Ingredients"
            onChange={ingredientChangeHandler}
            value={enteredIngredient}
          />
          <Select
            options={quantity}
            className="recipe-form__ingredient"
            onChange={quantityChangeHandler}
            value={enteredQuantity}
          />
          <Select
            options={process}
            className="recipe-form__ingredient"
            onChange={processChangeHandler}
            value={enteredProcess}
          />
          <Select
            options={time}
            className="recipe-form__ingredient"
            onChange={timeChangeHandler}
            value={enteredTime}
          />
          <Input
            type="text"
            className="recipe-form__ingredient"
            placeholder="1 Serving"
            width="6rem"
            disabled={true}
          />
          <Button text="Add" type="submit" className="add-btn" />
        </div>
      </div>
    </form>
  );
}

export default RecipeForm;
