import React from 'react'

function Childprops(props) {
  return (
    <div>
{/* My name is {props.name} & My sirname is {props.sirname} */}
<h1>My name is {props.names}</h1>
    </div>
  )
}

export default Childprops