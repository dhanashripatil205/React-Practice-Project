import React, { useEffect, useState } from 'react'
import Child from './child'

function Parent() {

    const [data,setData]=useState(10);
    const [count,setCount]=useState(100);
  return (
    <div>
       
<Child count={count} data={data}/>
        <button onClick={()=>setCount((prev)=>prev+1)}>Update Count</button>
        <button onClick={()=>setData((prev)=>prev+1)}>Update data</button>


    </div>
  )
}

export default Parent