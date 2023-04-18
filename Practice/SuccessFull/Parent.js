import React from 'react'
import Child from '../SuccessFull/Child'

function Parent() {

function greetingMsg(a,b){
    console.log('Hello from Parent')
    console.log(`addition is ${a+b}`)
}

  return (
    <div>
        <Child greetingMsg={greetingMsg}/>
    </div>
  )
}

export default Parent