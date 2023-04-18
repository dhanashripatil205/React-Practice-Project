import React from "react";
import Person from './Person'

function Example3() {
  const persons = [
    {
      id: 1,
      name: "Dhanashri",
      skill: "react",
      description: "Fullstack developer",
    },
    {
      id: 2,
      name: "Rupesh",
      skill: "react",
      description: "javascript developer",
    },

    {
      id: 3,
      name: "Kriya",
      skill: "react",
      description: "HTML developer",
    },
  ];

  const personlist = persons.map((person) => (
    <Person key={person.id} person={person}></Person>
  ));

  return <div>Hellooo {personlist}</div>;
}

export default Example3;
