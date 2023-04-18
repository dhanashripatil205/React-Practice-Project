// import React from "react";
//import Person from "./Person";


// //map method

// // map() creates a new array from calling a function for every array element.

// // map() does not execute the function for empty elements.

// // map() does not change the original array.

// //list component is responsible for rendering the list & Person component is responsible for rendering the person HTML


// function ListRendering17() {
//   // const names = ["Dhanashri", "Ganesh", "Kriya"];
//   // const nameList = names.map((name) => <h2>{name}</h2>);

//   const persons = [
//     {
//       id: 1,
//       name: "Keshav",
//       age: 20,
//       skill: "fullstack",
//     },

//     {
//       id: 2,
//       name: "Madhav",
//       age: 24,
//       skill: "React",
//     },

//     {
//       id: 3,
//       name: "Kranti",
//       age: 35,
//       skill: "Anguler",
//     },

//     {
//       id: 4,
//       name: "Trishul",
//       age: 30,
//       skill: "Mongodb",
//     }
//   ]
// //this is the correct code only but they recommanded that we have to refactor the jsx into seperate component so i will create new component name is person.js

// //& remove jsx code from here i.e <h2> & put it into person.js,

// //we can access the person data here so inside the map create Person component & passing info as a prop. & accept that props inside the Person.js as an argument.


//   const PersonList = persons.map(info => <Person info  { info } />)

//     // <h2>
//     //   My name is {info.name}. I am {info.age} years of old.I know {info.skill}
//     // </h2>


  
  
  

//   return <div>{PersonList}</div>
//         // <div>{nameList}</div>

//     }
    
  


// export default ListRendering17;
