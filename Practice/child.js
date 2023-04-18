import React, { useEffect } from "react";

function Child(props) {
  useEffect(() => {
    console.warn("called with data state");
  }, [props.data]);

  useEffect(() => {
    alert("count is " + props.count);
  }, [props.count]);
  return (
    <div>
      <h1>Count Props: {props.count}</h1>
      <h1>Data Props: {props.data}</h1>
    </div>
  );
}

export default Child;
