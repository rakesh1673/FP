import React from "react";

function Select(props) {
  console.log(props.options);

  return (
    <div className={props.className}>
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
    </div>
  );
}

export default Select;
