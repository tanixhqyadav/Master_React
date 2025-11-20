import React, { useState, useEffect } from 'react';

function Hathodabhai() {
  let name = "Hathodabhai";
  let [count, setCount] = useState(0);
  let [result, setResult] = useState({});

  useEffect(() => {
    async function dat() {
      const res = await fetch('https://api.agify.io?name=meelad');
      const data = await res.json();
      setResult(data);
    }
    dat();
  }, []);

  function inc() {
    setCount(prev => prev + 1);
  }

  function dec() {
    if (count > 0) {
      setCount(prev => prev - 1);
    }
  }

  return (
    <div>
      <h1>This is {name}</h1>
      <p>Counter: {count}</p>
      <button onClick={inc}>C++</button>
      <button onClick={dec}>C--</button>

      <h2>API Data:</h2>
      {result.name ? (
        <>
          <p>Name: {result.name}</p>
          <p>Predicted Age: {result.age}</p>
          <p>Count: {result.count}</p>
        </>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default Hathodabhai;
