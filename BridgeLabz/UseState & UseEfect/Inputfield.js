import React, {useState,useEffect} from 'react'

function Inputfield() {

    const [nameList,setNameList]=useState({name:'', lastname:''})

    useEffect(()=>{
        setTimeout(() => {
            
        
            // console.log(`My Name is ${nameList.name}`)
            // console.log(`My lastname is ${nameList.lastname}`)
            console.log('hello')
        },100)
       
    })

  return (
    <div>
        <input type='text' key= {nameList.index} value={nameList.name} onChange={e=>setNameList(pre=>({...pre,name:e.target.value}))}/>
        <input type='text' key= {nameList.index} value={nameList.lastname} onChange={e=>setNameList(pre=>({...pre,lastname:e.target.value}))}/>

        <h1>My Name is {nameList.name}</h1>
        <h1>My lastname is {nameList.lastname}</h1>

    </div>
  )
}

export default Inputfield