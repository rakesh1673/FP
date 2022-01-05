import React, { useState } from "react";
import Select from "../UI/Select";
import "./RecipeAddIngredient.css";

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
  { value: "10", label: "10" },
  { value: "20", label: "20" },
  { value: "30", label: "30" },
  { value: "60", label: "60" },
];

function RecipeAddIngredient() {
  const [enteredIngredient, setEnteredIngredient] = useState("");
  const [enteredQuantity, setEnteredQuantity] = useState("");
  const [enteredProcess, setEnteredProcess] = useState("");
  const [enteredTime, setEnteredTime] = useState("");

  const ingredientChangeHandler = (event) => {
    console.log(event.target.value);
  };

  const quantityChangeHandler = (event) => {
    console.log(event.target.value);
  };

  const processChangeHandler = (event) => {
    console.log(event.target.value);
  };

  const timeChangeHandler = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className="recipe-form__ingredients-control">
      <p>Create Recipe</p>
      <div className="recipe-form__ingredients">
        <div className="recipe-form__ingredient">
          <input
            type="text"
            placeholder="Ingredients"
            onChange={ingredientChangeHandler}
          />
        </div>
        <Select options={quantity} className="recipe-form__ingredient" />
        <Select options={process} className="recipe-form__ingredient" />
        <Select options={time} className="recipe-form__ingredient" />
        <div className="recipe-form__ingredient">
          <input
            type="text"
            className="serve"
            placeholder="1 Serving"
            disabled
          />
        </div>
        <div className="recipe-form__ingredient">
          <button>Add</button>
        </div>
      </div>
    </div>
  );
}

export default RecipeAddIngredient;
