import React, { useState } from 'react';

function Example10() {
  const [isToggled, setIsToggled] = useState(true);

  function handleClick() {
    setIsToggled(!isToggled);
  }

  return (
    <div>
      <button onClick={handleClick}>{isToggled ? 'ON' : 'OFF'}</button>
    </div>
  );
}

export default Example10;
