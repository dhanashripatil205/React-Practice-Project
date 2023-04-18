import React from 'react'
import ChildMethodAsaProp from './ChildMethodAsaProp'

function ParentMethodAsaProp() {

    function ClickHandler(a,b,c){
        console.log('The listed names are:',a,b,c)
    }
  return (
    <div>
<ChildMethodAsaProp method={ClickHandler}/>
    </div>
  )
}

export default ParentMethodAsaProp