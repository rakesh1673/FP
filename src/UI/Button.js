import React from "react";
import "./Button.css";

function Button(props) {
  const classes = "button " + props.className;

  return (
    <button className={classes} type={props.type || "button"}>
      {props.text}
    </button>
  );
}

export default Button;
