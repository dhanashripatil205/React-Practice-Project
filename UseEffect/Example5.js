//UseEffect With Cleanup

 import React , {useState }  from 'react'
import Example from './Example4-1'
 
 function Example5() {
    const [display, setDisplay] = useState(true )
   return (
     <div>
        <button onClick={()=>setDisplay(!display)}>Toggle display</button>

        {display && <Example/>}
     </div>
   )
 }
 
 export default Example5