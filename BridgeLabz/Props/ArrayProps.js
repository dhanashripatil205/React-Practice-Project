import React from "react";

function ArrayProps(props) {
  return (
    <div>
      {props.array.map((arrays) => (
        <li>{arrays}</li>
      ))}
      6th index element is {props.array[6]}
    </div>
  );
}

export default ArrayProps;
