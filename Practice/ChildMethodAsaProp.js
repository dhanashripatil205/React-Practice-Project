import React from 'react'

function ChildMethodAsaProp({method}) {
  return (
    <div>
<button onClick={()=>method("Dhanashri","Patil","Kriya")}>Click Me</button>
    </div>
  )
}

export default ChildMethodAsaProp