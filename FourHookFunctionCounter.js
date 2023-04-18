import React, { useState } from 'react'

function FourHookFunctionCounter() {

    const [items, setItems]=useState([])

    const additems=()=>{
        setItems([...items, { 
            id:items.length,
            value:Math.floor(Math.random() * 10) + 1
        }])
    }

    //whenever additems is getting called you make copy of all the items in the array using the spred operator , to that list of copied items we simply append another object that way we are not overriding the original array.
    //on 1st iteration item is an empty array so id will be 0 which is items.length & value will be random number between 1 & 10.
  return (
    <div>
        <button onClick={additems}>Add a number</button>
<ul>
    {items.map(items=>(
        <li key={items.id}>{items.value}</li>
    ))}
        
</ul>
    </div>
  )
}

export default FourHookFunctionCounter

//setitems is not getting merge & updated automatically we have to do this manually using spread operator