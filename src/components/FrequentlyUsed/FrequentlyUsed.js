import React from "react";
import Item from "../../UI/Item";
import "./FrequentlyUsed.css";

function FrequentlyUsed() {
  return (
    <div>
      <label>FREQUENTLY USED</label>
      <div className="frequently-used-container">
        <Item label="Salt" className="item-selected" />
        <Item label="Sugar" />
        <Item label="Refined Oil" />
        <Item label="Sesame Oil" className="item-selected" />
        <Item label="Wheat Flour" />
        <Item label="Maida" />
        <Item label="Rice" />
        <Item label="Chilli Powder" />
        <Item label="Curry Leaf" className="item-selected" />
        <Item label="Corrainder" />
        <Item label="Ginger" />
        <Item label="Green Chilli" className="item-selected" />
        <Item label="Garlic" />
        <Item label="Mustard" />
      </div>
    </div>
  );
}

export default FrequentlyUsed;
