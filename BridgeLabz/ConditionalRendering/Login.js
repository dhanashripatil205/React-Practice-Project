import React, { useState } from 'react'

function Login() {

    const[isLoggedIn,setIsLoggedIn]=useState(false)

    function clickHandler(){
        setIsLoggedIn(!isLoggedIn)
    }

  return (
    <div>
<button onClick={clickHandler}>{isLoggedIn?<div>Please Login</div>:<div>Already LoggedIn</div>}</button>

{isLoggedIn?<div>Login</div>:<div>Logout</div>}
    </div>
  )
}

export default Login