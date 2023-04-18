import React, { useState } from 'react'

function OneHooksFunctionCounter() {

//useState accepts initial value of the state variable(count)i.e 0 & returns pair of value i.e [count,setCount]
//UseState provide the setCount methods.setCount method is used to update the state of count.

    const [count, setCount] = useState(0)  //array distructring

    //Variable count contain current state value & SetCount will accept an argument & set count value to that argument.
    //The 1st time component renders a state variable is created & initialize default value to 0, default value is never use in re-renders.When you click on the button setCount method is called which will add 1 to current count value.1st click current value is incremented by 0 to 1.After that setCount method is cause component to re-renders. 

  return (
    <div>
      <button onClick={()=>setCount(count + 1)}>Count {count}</button>
    </div>
  )
}

export default OneHooksFunctionCounter

// steps:
// 1)Create Functional component
// 2)We need state property for initialize to 0
// 3)setState method

//useState is a hook lets add react state to functional component

//useState()->this function accepts the argument which is the initial value of state property.
        // & returns current value of state property & method that is capable of updating that state property.


//Rules->

//1)Only calls hooks at top level.
//2)Dont calls hooks inside the loops,conditions or nested functions.
//3)Only call hooks from react functions.
//4)call them from only react functional components & not just any javasript function.
