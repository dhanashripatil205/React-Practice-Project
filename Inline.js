import React from 'react'

/* 1st create an object inside that keyname its should be in camelcase only & specifies the value as a string */
const heading = {
    fontSize: '72px',
    color:'blue'
}

function Inline() {
  return (
    <div>
        <h1 style={heading}>inline</h1>
        <h1 className='error'>Error</h1>

        {/* css is applied every types of child component in every classes. */}

    </div>
  )
}

export default Inline