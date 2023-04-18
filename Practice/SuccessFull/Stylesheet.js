import React from 'react'
import './StylesheetNew.css'

function Stylesheet(props) {
    let className= props.xyz?'xyz':''

  return (
    <div>


<h1 className={className}>Hi my name is Dhanashri</h1>

    </div>
  )
}

export default Stylesheet