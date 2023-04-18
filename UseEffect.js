//The Effect Hook lets you perform side effects in functional compenents.

//It is a close replacement fort ComponentDidMount,componentDidUpdate & componentWillUnmount

import React, { useState } from 'react'

function UseEffect() {

    

    const [count,setCount]=useState(0)
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Click {count} times</button>
    </div>
  )
}

export default UseEffect