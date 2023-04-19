import React from 'react'
import CountChild from './CountChild'

function CountParent() {

  function clickHandlerNew (num1,num2){

    setInterval(()=>{
        console.log('Hi my name is Shravan')
        console.log(`Addition of both no is ${num1+num2}`)

    },1000)

    }

  return (
    <div>
    <CountChild clickHandlerNew={clickHandlerNew}/>

    </div>

  )
}

export default CountParent