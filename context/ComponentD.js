import React from 'react'
import ComponentE from './ComponentE'
import userContext from './userContext'

function ComponentD() {

    // static contextType = userContext

  return (
    <div>
        {/* Component D context {this.context} */}
                <ComponentE/>

          
    </div>
  )
}

// ComponentD.contextType = userContext

export default ComponentD