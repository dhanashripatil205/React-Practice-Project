//Context provides a way to pass data through the component tree without having to pass props down manually at every level.

import React from 'react'
import ComponentD from './ComponentD'
function ComponentC() {
  return (
    <div>
        <ComponentD/>
    </div>
  )
}

export default ComponentC