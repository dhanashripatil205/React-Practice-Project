import React from 'react'
import style1 from './InlineStyle.module.css'
import './InlineStyle.css'

function ExampleStylingInlineModule7() {
  return (
    <div>
<h1 className={style1.sucess1}>Success.</h1>
        <h1 className='error1'>Error.</h1>
    </div>
  )
}

export default ExampleStylingInlineModule7