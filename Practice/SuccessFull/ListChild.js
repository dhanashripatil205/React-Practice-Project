import React from 'react'

function ListChild(items) {
  return (
    <div>

<h1 key={items.id}>My Name is {items.name},I did my {items.skill} from EXTC</h1>
    </div>
  )
}

export default ListChild