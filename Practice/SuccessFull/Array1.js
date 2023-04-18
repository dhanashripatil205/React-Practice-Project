import React, { useState } from 'react'

function Array1() {

    const [state, setState]=useState({firstName:'',lastName:''})

  return (
    <div style={{color:'red'}}>
        <input type='text' value={state.firstName} onChange={(event)=>setState((pre)=>({...pre,firstName:event.target.value}))}/>
        <input type='text' value={state.lastName} onChange={(event)=>setState((pre)=>({...pre,lastName:event.target.value}))}/>

        <h1>firstName is : {state.firstName}</h1>
        <h1>lastName is : {state.lastName}</h1>
        <h2>{JSON.stringify(state)}</h2>

    </div>
  )
}

export default Array1