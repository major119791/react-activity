'use client';
import { useState } from 'react';

export default function StudentInfo() {
  const [student, setStudent] = useState({ name: '', gender: '', age: '', course: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (student.name && student.gender && student.age && student.course) {
      setSubmitted(true);
    }
  };

  return (
    <div className="p-6 bg-white bg-opacity-80 rounded-xl shadow-md max-w-md mx-auto text-center mt-8">
      {!submitted ? (
        <>
          <h2 className="text-xl font-bold mb-4">Enter Student Info</h2>
          <input name="name" onChange={handleChange} placeholder="Name" className="border p-2 rounded w-full mb-2" />
          <input name="gender" onChange={handleChange} placeholder="Gender" className="border p-2 rounded w-full mb-2" />
          <input name="age" onChange={handleChange} placeholder="Age" className="border p-2 rounded w-full mb-2" />
          <input name="course" onChange={handleChange} placeholder="Course" className="border p-2 rounded w-full mb-2" />
          <button onClick={handleSubmit} className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 mt-2">
            Submit
          </button>
        </>
      ) : (
        <div>
          <h2 className="text-lg font-semibold">Student Info Submitted:</h2>
          <p>Name: {student.name}</p>
          <p>Gender: {student.gender}</p>
          <p>Age: {student.age}</p>
          <p>Course: {student.course}</p>
        </div>
      )}
    </div>
  );
}