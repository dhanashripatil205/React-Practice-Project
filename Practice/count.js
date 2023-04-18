import React, { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);

  // function increment() {
  //   setCount((precount) => precount + 1);
  // }

  // function decrement() {
  //   setCount((precount) => precount - 1);
  // }
  return (
    <div>
      <p>{count}</p>
      {/* <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button> */}

<button onClick={()=>setCount((precount) => precount + 1)}>INCREMENT</button>
<button onClick={()=>setCount((precount) => precount - 1)}>DECREMENT</button>


    </div>
  );
}

export default Count;
