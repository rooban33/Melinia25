import React, { useState } from "react";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

const CountdownTimer = () => {
  const [targetDate] = useState(new Date("2025-03-07T09:00:00"));
  const now = new Date();

  const differenceInMilliseconds = Math.max(targetDate.getTime() - now.getTime(), 0);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: "0 10%",
        height: "30vh",
      }}
    >
      <FlipClockCountdown
        to={now.getTime() + differenceInMilliseconds}
        labels={["Days", "Hours", "Minutes", "Seconds"]}
        className="flip-clock"
        duration={0.5}
        hideOnComplete={false}
        labelStyle={{
          fontSize: "1.5rem",
          color: "white",
          fontWeight: "bold",
          textAlign: "center",
        }}
      />
    </div>
  );
};

export default CountdownTimer;
