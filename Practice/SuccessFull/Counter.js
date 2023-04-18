import React, { useState } from 'react'

function Counter() {

    const [count,setCount]=useState(0)
function increment(){
    setCount(pre=>pre+1)
}

function decrement(){
    setCount(pre=>pre-1)
}


  return (
    <div>
        count:{count}
<button type='button' onClick={increment}>Increment Count</button>
<button type='button' onClick={decrement}>Decement Count</button>

    </div>
  )
}

export default Counter