import React from 'react'
import SwitchNew from './SwitchNew'

function Switch() {

    const persons = ([
        {
            id:1,
            name:'Dhanashri',
            DOB:28
        },
        {
            id:2,
            name:'Kishan',
            DOB:8
        },
        {
            id:3,
            name:'Prakash',
            DOB:2
        }
    ])

   const personList= persons.map((person)=><SwitchNew person={person}></SwitchNew>)
  return (
    <div>
{personList}
    </div>
  )
}

export default Switch