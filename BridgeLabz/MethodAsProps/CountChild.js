import React from 'react'

function CountChild(props) {
  return (
    <div>
        <button onClick={props.clickHandlerNew(20,30)}>Method As Prop</button>
    </div>
  )
}

export default CountChild