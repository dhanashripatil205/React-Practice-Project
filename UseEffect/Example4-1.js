import React, { useEffect, useState } from "react";

function Example() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMouseposition = (e) => {
    console.log("Mouse Event");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mouseover", logMouseposition);

    return () => {
      console.log("Component Unmounting code");
      window.removeEventListener("mouseover", logMouseposition);
    };
  }, []);
  return (
    <div>
      X-{x},Y-{y}
    </div>
  );
}

export default Example;
