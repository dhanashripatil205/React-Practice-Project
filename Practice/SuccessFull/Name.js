import React from 'react'

function Name({name}) {
  return (
    <div>
        <h2 style={{border:'2px solid black'}}>My name is {name.name},I have skill of {name.description}</h2>
    </div>
  )
}

export default Name