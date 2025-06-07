'use client';
import { useState } from 'react';

export default function Counter() {
  const [start, setStart] = useState(1);
  const [count, setCount] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const startCounter = () => {
    setCount(start);
    setSubmitted(true);
  };

  return (
    <div className="p-6 bg-white bg-opacity-80 rounded-xl shadow-md max-w-md mx-auto text-center mt-8">
      {!submitted ? (
        <>
          <h2 className="text-xl font-bold mb-4">Set Your Starting Count</h2>
          <input
            type="number"
            value={start}
            onChange={(e) => setStart(Number(e.target.value))}
            className="border p-2 rounded w-full mb-4"
          />
          <button onClick={startCounter} className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
            Start Counting
          </button>
        </>
      ) : (
        <>
          <h2 className="text-xl mb-4">Count: {count}</h2>
          <button onClick={() => setCount(count + 1)} className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 mr-2">
            +
          </button>
          <button onClick={() => setCount(count - 1)} className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
            -
          </button>
        </>
      )}
    </div>
  );
}
