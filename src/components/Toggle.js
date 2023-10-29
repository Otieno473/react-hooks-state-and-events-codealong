import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  function state() {
    setIsOn((isOn) => !isOn);
  }
  const color = isOn ? "green" : "red";
  return (<button style={{background:color}}onClick={state}>{isOn ? "ON" : "OFF"}</button>);
}

export default Toggle;
