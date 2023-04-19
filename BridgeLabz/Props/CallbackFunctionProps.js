import React from "react";

function CallbackFunctionProps(props) {
  function handleClick() {
    props.onClick("This is from Handleclick");
  }

  return (
    <div>
      <button onClick={handleClick}>Click Handleclick</button>
    </div>
  );
}

export default CallbackFunctionProps;
