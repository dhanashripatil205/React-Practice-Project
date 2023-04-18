import React, { useState } from 'react'

function Recentpractise() {

    const [color,setColor] = useState('red')

    function changeColor(){
        setColor('blue')
    }

  return (
    <div>

<p style={{color:color, border:'2px solid green',backgroundColor:'cyan'}}>My favourite color is {color}.</p>
<button onClick={changeColor}>Click Me</button>
    </div>
  )
}

export default Recentpractise