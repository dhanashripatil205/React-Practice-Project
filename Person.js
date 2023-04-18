import React from "react";

function Person({info , key}) {
  return (
    <div>
      <h2>
        My name is {info.name}. I am {info.age} years of old.I know {info.skill}
      </h2>
    </div>
  )
}

export default Person;
