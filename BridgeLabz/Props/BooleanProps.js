import React from "react";

function BooleanProps(props) {
  return <div>{<button disabled={props.disabled}>Click Me</button>}</div>;
}

export default BooleanProps;
