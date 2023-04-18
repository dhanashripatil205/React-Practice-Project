import React, { useState } from "react";

function Array() {
  const [arr, setArr] = useState(["Apple", "Banana", "Orange", "Mango"]);

  function handleClick() {
    setArr([...arr, "duria"]);
  }
  return (
    <div>
      <ul>
        {arr.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Add Durian</button>
    </div>
  );
}

export default Array;
