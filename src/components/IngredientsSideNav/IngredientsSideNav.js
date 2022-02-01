import React from "react";
import Input from "../../UI/Input";
import FrequentlyUsed from "../FrequentlyUsed/FrequentlyUsed";
import "./IngredientSideNav.css";

function IngredientsSideNav() {
  return (
    <div className="ingredient-sidenav">
      <div className="ingredient-sidenav-options">
        <div className="ingredient-sidenav-title">INGREDIENTS</div>
        <div className="ingredient-sidenav-option">Reset</div>
      </div>
      <div className="search-div">
        <Input
          type="text"
          placeholder="Search here"
          className="ingredient-sidenav-input"
        />
      </div>
      <div className="frequently">
        <FrequentlyUsed />
        <br></br>
        <FrequentlyUsed />
      </div>
    </div>
  );
}

export default IngredientsSideNav;
