import React, { useState } from 'react'

function TwoHooksFunctionCounter() {

    const initialcount = 0
    const [count, setCount] = useState(initialcount)

    const incrementFive=()=>{
        for( let i=0; i<5;i++ )
        {
            setCount(prevCount=>prevCount+1)
        }
    }

  return (
    <div>
        count:{count}
        <button onClick={()=>setCount(initialcount)}>Reset</button> 
        <button onClick={()=>setCount(prevCount=>prevCount+1)}>Increment</button>
        <button onClick={()=>setCount(prevCount=>prevCount-1)}>Decrement</button>
        <button onClick={incrementFive}>Increment5</button>

    </div>
  )
}

export default TwoHooksFunctionCounter

//e.g. set state based on previous state value. 
//inside the onClick we have to pass callback function & initial count as an argument
// but both the previous functions way is not safer. 
// safer way check implementation on increment5 function