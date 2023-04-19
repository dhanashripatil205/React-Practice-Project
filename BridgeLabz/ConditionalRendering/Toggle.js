import React from "react";

function Toggle(props) {
  return (
    <div>
      <button>{props.isOn ? "Turn of the light" : "Turn on the light"}</button>
      <div>{props.isOn ? "Turn on" : "Turn off"}</div>
    </div>
  );
}

export default Toggle;
