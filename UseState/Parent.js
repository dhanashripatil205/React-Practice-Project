
import React from 'react'
import ChildComponent from './child'

export default function Parent() {

    function greemessage(a,b,c){
        console.log('clicked from child',a,b,c)
    }
  return (
    <div>
        <ChildComponent greemessage={greemessage}/>
    </div>
  )
}
