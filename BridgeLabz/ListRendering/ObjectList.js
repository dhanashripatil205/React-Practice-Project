import React from 'react'


function ObjectList() {

    const Persons = [{
           id:1,
           name:"Dhanashri",
           age:29
    },
    {
        id:2,
        name:"Ritesh",
        age:19
 },
 {
    id:3,
    name:"Keya",
    age:25
}]

const PersonList = Persons.map((person)=><div key={person.id}>My Name is {person.name} & age is{person.age}</div>)

  return (
    <div>
    {PersonList}
    </div>
  )
}

export default ObjectList