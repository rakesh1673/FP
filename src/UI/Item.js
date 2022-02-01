import React from "react";
import "./Item.css";

function Item(props) {
  const classes = "item " + props.className;

  return (
    <div className={classes}>
      <p>{props.label}</p>
    </div>
  );
}

export default Item;
