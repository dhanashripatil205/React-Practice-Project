

import React, { useState } from 'react'

function NameReverse() {

    const [name,setName]=useState({firstName:'',lastName:''})

    function reverseName(){
        setName((pre)=>({...pre,firstName:pre.lastName}))
        setName((pre)=>({...pre,lastName:pre.firstName}))

    }
  return (
    <div>
        
<input type='text' value={name.firstName} onChange={(e)=>setName(pre=>({...pre,firstName:e.target.value}))}/>
<input type='text' value= {name.lastName} onChange={(e)=>setName(pre=>({...pre,lastName:e.target.value}))}/>

<button onClick={reverseName}>Click</button>


<h1>Firstname:{name.firstName}</h1>
<h1>Lastname: {name.lastName}</h1>
{JSON.stringify(name)}


    </div>
  )
}

export default NameReverse