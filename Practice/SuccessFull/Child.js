import React from 'react'

function Child({greetingMsg}) {
  return (
    <div>
        <button onClick={greetingMsg(10,15)}>Addtion</button>
    </div>
  )
}

export default Child