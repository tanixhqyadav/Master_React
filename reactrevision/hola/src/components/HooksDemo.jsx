import React, { useState, useEffect, useRef } from 'react';

const HooksDemo = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    console.log('Component Mounted or Updated');
  }, [count]);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">React Hooks Revision</h2>
      
      <div className="mb-4">
        <p className="mb-2">Count: {count}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setCount(count + 1)}>Increment</button>
      </div>
      <div className="mb-4">
        <p className="mb-2">Count: {count}</p>
        {/* <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setCount(count - 1)}>Dcreasement</button> */}
      </div>

      <div className="mb-4">
        <input
          ref={inputRef}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Type your name"
          className="border p-2 rounded"
        />
        <button onClick={focusInput} className="ml-2 bg-green-500 text-white px-3 py-2 rounded">Focus Input</button>
      </div>

      <p className="text-gray-700">Hello, {name}</p>
    </div>
  );
};

export default HooksDemo;
