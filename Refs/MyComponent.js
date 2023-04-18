import { useRef } from 'react';

function MyComponent() {
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Click</button>
    </div>
  );
}

export default MyComponent