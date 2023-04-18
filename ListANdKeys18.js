//React telling us each item in the list rendered using map operator should have prop called Key & value to that prop should be unique within the list.

//within the map method we have to use the key prop,key prop is a special attribute you need to include while creating the list of elements.

//IMP=>Key prop is not used to rerender the data.Key props are not accesible in the child component.e.g if i pass key as prop & access it inside the person it will not re-render.

//Q.Why key is needed?

// key helps react to identify which component in list have changed or added or removed & plays the crucial role in handling UI updates efficiently.
//

import React from "react";
import Person from "./Person";

function ListANdKeys18() {
  const persons = [
    {
      id: 1,
      name: "Keshav",
      age: 20,
      skill: "fullstack",
    },

    {
      id: 2,
      name: "Madhav",
      age: 24,
      skill: "React",
    },

    {
      id: 3,
      name: "Kranti",
      age: 35,
      skill: "Anguler",
    },

    {
      id: 4,
      name: "Trishul",
      age: 30,
      skill: "Mongodb",
    },
  ];
  const PersonList = persons.map(info => <Person key={info.id} info={info} /> //u can pass any unique items of the list as an id e.g name of list is unique  then use key={info.name}
  );
  return <div>{PersonList}</div>;
}

export default ListANdKeys18;
