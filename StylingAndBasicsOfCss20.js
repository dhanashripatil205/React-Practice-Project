import React from 'react'

import './myStyles.css'
//Styling React Component

//1) CSS stylesheets

// 2)Inline Styling
// 3)CSS modules
// 4)CSS in JS Libaries (Styled Components)


function StylingAndBasicsOfCss20(props) {

    let className=props.primary ? 'primary' : ''

  return (
    <div>
{/* <h1 className={className}>stylesheets</h1> */}

{/* if you want to apply both styles on same content use template literals. */}
<h1 className={`${className} font-xl`}>stylesheets</h1>

    </div>
  )
}

export default StylingAndBasicsOfCss20