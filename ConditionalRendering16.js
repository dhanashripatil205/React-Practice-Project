// conditional Rendering

// 1.if/else
// 2.element variables
// 3.Ternary conditional operator
// 4.short circuit operator

import React, { Component } from 'react'

 class ConditionalRendering16 extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isloggedIn:false
      }
    }
    //if logged in <Welcome vishwas should be display> else <welcome display>
//if else statement dont work inside the jsx that is because the jsx is just a synthactic suger for function call & object construction.
//Adding if else statement within jsx is not valid.
  render() {
    //-----------------------------------------------------------------------------------------------------
    if (this.state.isloggedIn){
        return (
        <div>Welcome Dhanashri</div>
        )
    }else
    {
        return  (
        <div>Welcome Guest</div>
        )
    }

 //-----------------------------------------------------------------------------------------------------   
    //2nd Approach-> Using element variable(we used js variable for store the elements.)

let message //its a variable which stores the element to be render.

if(this.state.isloggedIn){
    message=<div>Welcome Dhanashri</div>
}else{
    message=<div>Welcome Guest</div>

}

return <div>{message}</div> //return message variable in the jsx 

//-----------------------------------------------------------------------------------------------------

//3rd approach->Ternary conditional operator(you cant use this approach inside the jsx.)

return(
    this.state.isloggedIn?<div>Welcome Dhanashri</div>:<div>Welcome Guest</div>
)
//-----------------------------------------------------------------------------------------------------
//4th Approach->short circuit operator(When you want to render something or nothing)

return this.state.isloggedIn && <div>Welcome Dhanashri</div>

//if islogged in is true then it will render Welcome Dhanashri otherwise it will not going to re-render anything.
//-----------------------------------------------------------------------------------------------------
   // return (
    //   <div>
        
    //   </div>
    // )
  }
}

export default ConditionalRendering16
