import React from "react";
import RecipeIngredient from "./RecipeIngredient";
import "./RecipeIngredientList.css";

function RecipeIngredientList(props) {
  return (
    <div className="recipe-ingredient">
      {props.items.map((item) => (
        <RecipeIngredient
          key={item.id}
          name={item.ingredient}
          quantity={item.quantity}
          process={item.process}
          time={item.time}
        />
      ))}
    </div>
  );
}

export default RecipeIngredientList;
