import React from 'react'

function Listarray() {

const names = ['Hemant','Akash','Neel','Shravan']
const colors = ['red', 'blue', 'green', 'purple'];
const background = ['pink','green','orange','red']


const nameList = names.map((name,index)=><h1 style={{color:colors[index],backgroundColor:background[index]}} key={index}>{name}</h1>)

  return (
    <div>
{
    nameList
}
    </div>
  )
}

export default Listarray