import { useRef } from "react";
function MyComponent3() {
    const countRef = useRef(0);
  
    function incrementCount() {
      countRef.current++;
      console.log(`Current Count: ${countRef.current}`);
    }
  
    return (
      <div>
        <button onClick={incrementCount}>Increment Count</button>
      </div>
    );
  }

  export default MyComponent3