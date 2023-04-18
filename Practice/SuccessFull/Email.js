import React, { useState } from 'react'

function Email() {

const [name,setName]=useState('')
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')


function ClickHandler(){

    alert(`Submitted name: ${name} ${email} ${password}`);
        
}

  return (

   
    <form onSubmit={ClickHandler}>
        <label> Firstname:
            <input type='text' value={name} onChange={(event)=>setName(event.target.value)}/>
        </label>

        <br/>

        <label> Email:
            <input type='text' value={email} onChange={(event)=>setEmail(event.target.value)}/>
        </label>

        <br/>

        <label> Password:
            <input type='text' value={password} onChange={(event)=>setPassword(event.target.value)}/>
        </label>
        <br/>

        <button type="submit">Submit</button>


    </form>

    
  )
}

export default Email