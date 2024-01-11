import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal";

// let timer; Issues since variable is shared acroos component instances

const TimerChallenge = ({ title, targetTime }) => {
  const [timerExpired, setTimerExpired] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);
  const timer = useRef();

  const handleStart = () => {
    setTimerStarted(true);
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      handleStop();
    }, targetTime * 1000);
  };

  const handleStop = () => {
    setTimerStarted(false);
    clearTimeout(timer.current);
  };

  return (
    <>
      {timerExpired && <ResultModal result={"lost"} targetTime={targetTime} />}
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "Timer is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;
