import React, { useState } from 'react'

function Toggle() {

    const [islogin,setIslogin] = useState(false)

    function clickHandler (){
        setIslogin(!islogin)
    }
  return (
    <div>


        <button onClick={clickHandler}>{islogin ? 'login' : 'logout' }</button>

<p>{islogin ? 'You can logout from here' : 'Please Login'}</p>

    </div>
  )
}

export default Toggle