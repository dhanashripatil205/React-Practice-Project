import React, { useState } from 'react'

function ArrayListNew() {

    const [array,setArray]=useState(false)

    function onclickHandler(){
        setArray(!array)
    }

  return (
    <div>
default state:{array}
<button onClick={onclickHandler}>{array?'On':'off'}</button>
    </div>
  )
}

export default ArrayListNew