import React from 'react'

function ArrayList() {
   
    const array = [12,25,63,56,23,56,23,53,2,5,3,4,2]

    const NewArray = array.map((items)=><div style={{backgroundColor:'grey',color:'red',border:'2px solid black'}}>{items}</div>)

  return (
    <div>
        {NewArray}
    </div>
  )
}

export default ArrayList