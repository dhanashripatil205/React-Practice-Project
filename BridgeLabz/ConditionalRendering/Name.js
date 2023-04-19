import React from "react";

function Name(props) {
  return (
    <div>
      {props.name ? (
        <div>My name is {props.name}</div>
      ) : (
        <div>Name is not avaiable</div>
      )}
    </div>
  );
}

export default Name;
