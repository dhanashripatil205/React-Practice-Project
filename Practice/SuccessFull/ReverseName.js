import React, { useState } from 'react'

function ReverseName() {

    const [name,setName]=useState({firstName:'Dhanashri', lastName:'Patil'})

function changeName(){
setName(()=>({firstName:name.lastName, lastName:name.firstName}))
}

  return (
    <div>
        <h1>{name.firstName} {name.lastName}</h1>
<button onClick={changeName}>Click me</button>
    </div>
  )
}

export default ReverseName