'use client';
import { useState } from 'react';

export default function StudentInfo() {
  const [student, setStudent] = useState({
    name: '',
    gender: '',
    age: '',
    course: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  return (
    <div className="card">
      {!submitted ? (
        <>
          <h2>Student Information</h2>
          <input name="name" placeholder="Name" onChange={handleChange} />
          <input name="gender" placeholder="Gender" onChange={handleChange} />
          <input name="age" placeholder="Age" onChange={handleChange} />
          <input name="course" placeholder="Course" onChange={handleChange} />
          <button onClick={() => setSubmitted(true)}>Submit</button>
        </>
      ) : (
        <>
          <h2>Submitted Info:</h2>
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>Gender:</strong> {student.gender}</p>
          <p><strong>Age:</strong> {student.age}</p>
          <p><strong>Course:</strong> {student.course}</p>
          <button onClick={() => { setSubmitted(false); setStudent({ name: '', gender: '', age: '', course: '' }); }}>Back</button>
        </>
      )}
    </div>
  );
}
