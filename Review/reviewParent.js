import React, { useEffect, useState } from 'react'
import ChildRivew from './childRivew'

function ReviewParent() {

  const [count, setCount] = useState(0)


  const [colors,setColor]=useState('white')


  useEffect(()=>{

    
setTimeout(() => {
  

  setCount((prevCount)=>prevCount+1)
   console.log(`count is : ${count}`)

}, 1000);
  },[count,colors])


  useEffect(()=>{
    const col1 = ['green','red','blue','orange','white']

    const randomNo1 = Math.floor(Math.random()* col1.length)

    setTimeout(() => {
      setColor(col1[randomNo1])
    }, 1000);
  })

function clickHandler(){
setCount((prevCount)=>prevCount+1)
}

  return (
    <div>
      <p style={{background:'colors' , height:'50vh',border:'2px solid black',fontSize:"50px"}}>Count:{count}</p>
<ChildRivew onClick={clickHandler}></ChildRivew >
    </div>
  )
}

export default ReviewParent