//use index as key for rendering the list

//index is passed as a 2nd parameter within an map method & that index used as a map value to the key prop.

import React from 'react'

function IndexAsKeyAntiPattern19() {

    const names = ["Dhanashri", "Ganesh", "Kriya"];
    const nameList = names.map((name ,index) => <h2 key={index}>{index} {name}</h2>);
  return (
    <div>{nameList}</div>
  )
}

export default IndexAsKeyAntiPattern19