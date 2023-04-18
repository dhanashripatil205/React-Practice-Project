import React, { useState, useEffect } from 'react';

function Example() {
  const [backgroundColor, setBackgroundColor] = useState('white');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const colors = ['red', 'green', 'blue', 'yellow','purple','pink'];
      const randomIndex = Math.floor(Math.random() * colors.length);
      setBackgroundColor(colors[randomIndex]);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  },[backgroundColor]);

  return (
    <div style={{ backgroundColor ,height:1000}}>
      <h1>Hello, world!</h1>
    </div>
  );
}

export default Example