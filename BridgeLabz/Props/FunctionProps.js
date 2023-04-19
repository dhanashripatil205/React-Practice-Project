import React from "react";

function FunctionProps(props) {
  return <div>{<button onClick={props.onClick}>Click ME</button>}</div>;
}

export default FunctionProps;
