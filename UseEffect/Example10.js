import React , {useState,useEffect} from 'react'

function Example10() {

    const [count,setCount]=useState(0)

    useEffect(()=>{
        console.log('Counter component mounted')

        return()=>{
            console.log('Counter component unmounted')
        }
    },[])

    useEffect(()=>{
        console.log('Counter Updated!')
    },[count])
    
  return (
    <div>
        <p>Count: {count}</p>
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default Example10



