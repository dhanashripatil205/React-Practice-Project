import React from 'react'
import ListChild from './ListChild'

function List() {

    const wholeList = ([
        {
            id:1,name:'dhanu',skill:'BE',
         
          

        },
        {
            id:2,name:'gitu',skill:'SE'
        },

{
    id:3,name:'patu',skill:'FE'

},
{
    id:4,name:'satu',skill:'TE'
}
    ])

    
    const whole=wholeList.map((items)=>(<ListChild/>))
    

  return (
    <div>

{whole}
    </div>
  )
}

export default List