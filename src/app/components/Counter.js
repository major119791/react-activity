'use client';
import { useState } from 'react';

export default function Counter() {
  // Part A fundamental: Variables (State)
  const [count, setCount] = useState(0);
  const [interval, setIntervalVal] = useState(1);

  // Part A fundamental: Function
  const updateCounter = (operation) => {
    operation === 'add' 
      ? setCount(count + interval) 
      : setCount(count - interval);
  };

  return (
    <div className="card">
      <h2>Set count interval:</h2>
      <input
        type="number"
        value={interval}
        onChange={(e) => setIntervalVal(Number(e.target.value))} //Part A fundamental: Function
Event Handling
        min="1"
      />
      <h2>Count: {count}</h2>
      <div className="buttons">
        <button onClick={() => updateCounter('subtract')}>Decrease</button>
        <button onClick={() => updateCounter('add')}>Increase</button>
      </div>
    </div>
  );
}
