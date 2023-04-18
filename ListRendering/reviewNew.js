import React, { useState,useEffect } from 'react'

function Review() {

    const [count,setCount] = useState({salary:'' , tax:''})

    useEffect(()=>{
      console.log('changed')
    },[count.salary , count.tax])

    function Change(){
        setCount((pre)=>({...pre,salary:pre.tax, tax:pre.salary}))

        
    }


  return (
    <div>
<input value={count.salary} type='salary' onChange={(e)=>setCount((pre)=>({...pre,salary:e.target.value}))} />

<input value={count.tax} type='salary' onChange={(e)=>setCount((pre)=>({...pre,tax:e.target.value}))} />

<h1>My Salary is:{count.salary}</h1>
<h1>My Tax is:{count.tax}</h1>

<button type='button' onClick={Change}>Click Me</button>


    </div>
  )
}

export default Review