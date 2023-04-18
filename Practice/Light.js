import React, { useState } from 'react';

function Light() {
  const [isOn, setIsOn] = useState(false);

  function toggle() {
    setIsOn(prevState => !prevState);
  }

  return (
    <div>
      <p>The light is {isOn ? 'on' : 'off'}</p>
      <button onClick={toggle}>{isOn ? 'Turn off' : 'Turn on'}</button>
    </div>
  );
}

export default Light