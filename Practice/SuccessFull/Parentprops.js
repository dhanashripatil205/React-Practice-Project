import React, { useState } from 'react'
import Childprops from '../SuccessFull/Childprops'


function Parentprops() {

    const [name,setName]= useState('Dhanashri')

  return (
    <div>
    <Childprops  names={name}/>
    <button onClick={()=>setName((pre)=>'Kriya')}>Change Name</button>

    </div>
  )
}

export default Parentprops