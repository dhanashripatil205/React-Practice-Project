import React from "react";

function Person({ person }) {
  return (
    <div>
      <h1 style={{color:'red',border:'2px solid green'}}>
        My name is {person.name}. I know {person.skill}. Description is{" "}
        {person.description}
      </h1>{" "}
    </div>
  );
}

export default Person;
