import React from 'react'

function SwitchNew({person}) {
  return (
    <div>
        <h1 key={person.id}>Hi My name is {person.name} & My DOB is {person.DOB}</h1>
    </div>
  )
}

export default SwitchNew