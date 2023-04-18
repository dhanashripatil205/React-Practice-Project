import React from "react";
import { useState } from "react";

function DisplayArray() {
  const [lists, setLists] = useState([1, 2, 3, 4, 5]);

  function ChangeNo() {
    setLists(() => [6, 7, 8, 9, 10]);
  }

  
  return (
    <div>


      <ul>
        {lists.map((list) => (
          <li style={{ color: "red" , border:'green 2px solid'}}>{list}</li>
        ))}
      </ul>
      <button  onClick={ChangeNo}>
        Change Number
      </button>
    </div>
  
  );
}

export default DisplayArray;
