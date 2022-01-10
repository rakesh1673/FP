import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./RecipeProgressTime.css";

function RecipeProgressTime() {
  return (
    <div className="recipe-progressbar">
      <div className="recipe-progress-time">
        <CircularProgressbar
          value={80}
          text="00:54"
          strokeWidth={5}
          styles={buildStyles({
            pathColor: `#EAA82B`,
            textColor: "black",
            trailColor: "#d6d6d6",
            backgroundColor: "#3e98c7",
          })}
        />
      </div>
    </div>
  );
}

export default RecipeProgressTime;
