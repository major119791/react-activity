'use client';
import { useState } from 'react';

export default function WelcomeCard() {
  // Part A fundamental: Variables
  const defaultGreeting = "Hello";
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Part A fundamental: Function
  const formatName = (inputName) => {
    return inputName.trim() === '' ? "Guest" : inputName;
  };

  return (
    <div className="card">
      {!submitted ? (
        <>
          <h2>Enter your name:</h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)} // Part A fundamental: Event Handling
            placeholder="Your name"
          />
          <button onClick={() => setSubmitted(true)}>Submit</button>
        </>
      ) : (
        <>
          <h2>{defaultGreeting}, {formatName(name)}! You're looking good today 😎</h2>
          <button onClick={() => { setSubmitted(false); setName(''); }}>Back</button>
        </>
      )}
    </div>
  );
}
