'use client';
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [interval, setIntervalVal] = useState(1);

  return (
    <div className="card">
      <h2>Set count interval:</h2>
      <input
        type="number"
        value={interval}
        onChange={(e) => setIntervalVal(parseInt(e.target.value))}
        min="1"
      />
      <h2>Count: {count}</h2>
      <div className="buttons">
        <button onClick={() => setCount(count - interval)}>Decrease</button>
        <button onClick={() => setCount(count + interval)}>Increase</button>
      </div>
    </div>
  );
}
