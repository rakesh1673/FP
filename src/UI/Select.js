import React from "react";

function Select(props) {
  return (
    <div className={props.className}>
      <label>{props.label}</label>
      <select onChange={props.onChange} value={props.value}>
        {props.options.map((option, index) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
