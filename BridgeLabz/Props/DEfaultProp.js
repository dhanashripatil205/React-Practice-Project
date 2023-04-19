import React from 'react'

function MyComponent(props) {

    MyComponent.defaultProps  = {
        count:0,
    };
  return (
    <div>
<h1>The count is {props.count}</h1>


    </div>

  )
}

export default MyComponent