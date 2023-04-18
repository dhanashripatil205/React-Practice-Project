import React, { useState } from 'react'

function ThreeHookFunctionCounter() {

const [name, setName]=useState({firstname:'',lastname:''})

  return (
   <form>
    <input type="text" 
    value={name.firstname} 
    ocChange={event=>setName({...name, firstname: event.target.value})}/>

    <input type="text" 
    value={name.lastname} 
    ocChange={event=>setName({...name, lastname: event.target.value})}/>

<h2> your firstname is - {name.firstname}</h2>
<h2> your lastname is - {name.lastname}</h2>
<h2>{JSON.stringify(name)}</h2>
{/* useState hook will not merge the state we have to merge it manually, we can use spread oprator for this.*/}

   </form>
  )
}

export default ThreeHookFunctionCounter

//using object as a state variable with the useState Hooks.

//state variable can be a string, array, number, boolean,object

//js datatype- nnbbssou=>number null bigint boolean string symbol object undefind