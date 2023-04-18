import React, { useEffect, useState } from "react";

function Example() {
  const [count, setCount] = useState(0);

  const tick = () => {
    // setCount(count + 1); //dependancy array [count]
    setCount(prevcount=>prevcount+1) //dependance array []
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

// useEffect(() => {
//     function doSomething(){
//         console.log(someProp)
//     }
//     doSomething()

//     const interval = setInterval(tick, 1000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, [someProp]);
  return <div>{count}</div>;
}

export default Example;
