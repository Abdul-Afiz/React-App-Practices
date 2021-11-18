import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Timer = () => {
  const red = "#f54e4e";
  const green = "#4aec8c";
  return (
    <div>
      <CircularProgressbar
        value={60}
        text={`${60}%`}
        styles={buildStyles({
          textColor: "#fff",
          pathColor: red,
          trailColor: "rgba(255,255,255,0.2)",
        })}
      />
      <div></div>
    </div>
  );
};

export default Timer;
