import React, { useEffect, useState } from 'react'

function Country() {


    const [backColor,setBackColor]= useState('white')

    const numbers = [1,2,3,4,5]

   
     

        useEffect(()=>{
            const bgColor1 = ['green','pink','yellow','blue','orange']
            const randomIndex = Math.floor(Math.random() * bgColor1.length);

            const timeoutId =  setTimeout(()=>{
            setBackColor(bgColor1[randomIndex])
          },1000)

          return()=>{
            clearTimeout(timeoutId)
            
          }
        },[backColor])


  return (
    <div>
{
    numbers.map((number)=><h1 style={{color:'red' , backgroundColor:backColor,border:'2px solid black'}} >{number}</h1>)
}
    </div>
  )
}

export default Country