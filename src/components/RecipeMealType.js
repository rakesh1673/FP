import React from "react";

function RecipeMealType(props) {
  console.log(props.options);

  return (
    <>
      <label>{props.label}</label>
      <select>
        {props.options.map((option, index) => (
          <option
            key={option.value}
            // selected={index === 0}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
}

export default RecipeMealType;
