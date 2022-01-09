import React from "react";
import "./RecipeIngredient.css";
import clock from "../../assets/clock.svg";
import trash from "../../assets/trash.svg";

function RecipeIngredient(props) {
  //⌛
  return (
    <div className="recipe-ingredient__card">
      <div className="recipe-ingredient__title">
        <div className="recipe-ingredient__img">🍤</div>
        <div className="recipe-ingredient__name">{props.name}</div>
      </div>

      {/* <div>{props.name}</div> */}
      <div className="recipe-ingredient__qty">{props.quantity} gm</div>
      <div className="recipe-ingredient__process">{props.process}</div>
      <div className="recipe-ingredient__time">
        <img width="10px" src={clock} alt="clock" /> {props.time}Mins
      </div>
      <div className="recipe-ingredient__delete">
        <img src={trash} alt="trash" />
      </div>
    </div>
  );
}

export default RecipeIngredient;
