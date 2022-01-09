import React from "react";

function Input(props) {
  return (
    <div className={props.className}>
      <label>{props.label}</label>
      <input
        type={props.type}
        onChange={props.onChange}
        placeholder={props.placeholder || ""}
        disabled={props.disabled}
        style={{ width: props.width }}
        value={props.value}
      />
    </div>
  );
}

export default Input;
