import React, { useState } from 'react';

function Example9() {
  const [inputValue, setInputValue] = useState('');

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>You typed: {inputValue}</p>
    </div>
  );
}

export default Example9;