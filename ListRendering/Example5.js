import React from 'react'
import './StyleExample5.css'

function Example5(props) {
let design = props.primary ? 'primary' : ' '

  return (
    <div>
        <h1 className={`${design} {design-font}`}>StyleExample</h1>
    </div>
  )
}

export default Example5