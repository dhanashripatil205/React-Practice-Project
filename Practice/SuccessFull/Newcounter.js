import React, { useEffect, useState } from 'react'

function Newcounter() {

      const [count, setCount] = useState(0);
      const [color, setColor] = useState("white");
    
      useEffect(() => {
        let intervalId;
        if (count % 2 === 0) {
          intervalId = setInterval(() => setColor("red"), 1000);
        } else {
          intervalId = setInterval(() => setColor("blue"), 1000);
        }
        return () => clearInterval(intervalId);
      }, [count]);

      useEffect(()=>{
        setTimeout(()=>{
            setCount((prevCount) => prevCount + 1);
        },1000)
      })
    
    //   const incrementCount = () => {
    //     setCount((prevCount) => prevCount + 1);
    //   };
    
      return (
        <div style={{ backgroundColor: color }}>
          <h1>{count}</h1>
        </div>
      );
    }
    

export default Newcounter