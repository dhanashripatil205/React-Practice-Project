import React from 'react'

function OptionalProps(props) {
  return (
    <div>
{props.message|| 'No Message'}
    </div>
  )
}

export default OptionalProps