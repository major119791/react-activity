'use client';
import { useState } from 'react';

export default function WelcomeCard() {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (name.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="p-6 bg-white bg-opacity-80 rounded-xl shadow-md max-w-md mx-auto text-center mt-8">
      {!submitted ? (
        <>
          <h2 className="text-xl font-bold mb-4">Enter Your Name</h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="border p-2 rounded w-full mb-4"
          />
          <button onClick={handleSubmit} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Submit
          </button>
        </>
      ) : (
        <h2 className="text-2xl font-bold">Welcome {name}!!! You’re looking good today 😎</h2>
      )}
    </div>
  );
}
