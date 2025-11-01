import { useEffect } from "react";
import { useState } from "react";

const Countdown = () => {
  const [start, setStart] = useState(10);
  const [time, setTime] = useState(10);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerId;

    if (isRunning && time > 0) {
      timerId = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    } else if (time === 0) {
      setIsRunning(false);
    }

    return () => clearInterval(timerId);
  }, [isRunning, time]);

  const handleInput = (e) => {
    const x = Number(e.target.value);
    setStart(x);
    setTime(x);
    setIsRunning(false);
  };

  const handleStart = () => {
    if (time > 0) {
      setIsRunning(true);
    }
  };
  const handleStop = () => {
    setIsRunning(false);
  };
  const handleReset = () => {
    setIsRunning(false);
    setTime(start);
  };

  return (
    <div>
      <h2>Countdown Timer</h2>
      <label>Set Time (seconds): </label>
      <input type="number" value={start} onChange={handleInput} />
      <p>Time Left: {time} seconds</p>
      <button disabled={isRunning || time === 0} onClick={handleStart}>
        Start
      </button>
      <button disabled={!isRunning} onClick={handleStop}>
        Stop
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Countdown;
