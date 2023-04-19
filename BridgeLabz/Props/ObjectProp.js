import React from "react";

function ObjectProp(props) {
  return (
    <div>
      My name is {props.objectProp.name} & My age is {props.objectProp.age}
    </div>
  );
}

export default ObjectProp;
