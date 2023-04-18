import React from 'react'

function Example2() {

    const list = [1,2,3,4,5]

    const wholelist = list.map((sol)=><h2 style={{color:'brown',border:'2px dotted grey',backgroundColor:'cyan'}}>{sol}</h2>)
    
  return (
    <div>{wholelist}</div>
  )
}

export default Example2