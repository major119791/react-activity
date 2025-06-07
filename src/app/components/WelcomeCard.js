'use client';
import { useState } from 'react';

export default function WelcomeCard() {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="card">
      {!submitted ? (
        <>
          <h2>Enter your name:</h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
          />
          <button onClick={() => setSubmitted(true)}>Submit</button>
        </>
      ) : (
        <>
          <h2>Welcome {name}!!! You're looking good today 😎</h2>
          <button onClick={() => { setSubmitted(false); setName(''); }}>Back</button>
        </>
      )}
    </div>
  );
}
