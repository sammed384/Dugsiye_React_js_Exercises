import { useState } from "react";

const ToggleButton = () => {
  const [isOn, setIon] = useState("true");
  const toggle = () => {
    setIon(!isOn);
  };

  return (
    <div>
      <p>The button is {isOn ? "ON" : "OFF"}</p>
      <button onClick={toggle}>Turn {isOn ? "OFF" : "ON"}</button>
    </div>
  );
};

export default ToggleButton;
