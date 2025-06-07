'use client';
import { useState } from 'react';

export default function StudentInfo() {
  const [student, setStudent] = useState({
    name: '',
    gender: '',
    age: '',
    id: '',
    extraInfo: []   // Part A fundamental: Array to store dynamic fields
  });

  const [currentField, setCurrentField] = useState({
    key: '',
    value: ''
  });

  const [submitted, setSubmitted] = useState(false);

  // Add new extra field to array
  const addExtraField = () => {
    if (currentField.key.trim() && currentField.value.trim()) {
      setStudent(prev => ({
        ...prev,
        extraInfo: [
          ...prev.extraInfo,
          {
            id: Date.now(), 
            key: currentField.key.trim(),
            value: currentField.value.trim()
          }
        ]
      }));
      setCurrentField({ key: '', value: '' });
    }
  };

  // Remove field from array
  const removeExtraField = (id) => {
    setStudent(prev => ({
      ...prev,
      extraInfo: prev.extraInfo.filter(field => field.id !== id)
    }));
  };

  return (
    <div className="card">
      <h2>Student Information:</h2>
      {!submitted ? (
        <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
          {/* Standard Fields */}
          <input
            type="text"
            name="name"
            value={student.name}
            onChange={(e) => setStudent({ ...student, name: e.target.value })}
            placeholder="Full Name"
            required
          />
          <input
            type="number"
            name="age"
            value={student.age}
            onChange={(e) => setStudent({ ...student, age: e.target.value })}
            placeholder="Age"
            min="16"
            required
          />
          <select
            name="gender"
            value={student.gender}
            onChange={(e) => setStudent({ ...student, gender: e.target.value })}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          {/* Dynamic Extra Fields Section */}
          <div style={{ margin: '1rem 0', padding: '1rem', border: '1px dashed #ccc' }}>
            <h3>Additional Information</h3>
            {student.extraInfo.map((field) => (
              <div key={field.id} style={{ display: 'flex', gap: '0.5rem', margin: '0.5rem 0' }}>
                <strong>{field.key}:</strong> 
                <span>{field.value}</span>
                <button
                  type="button"
                  onClick={() => removeExtraField(field.id)}
                  style={{ marginLeft: 'auto', color: 'red' }}
                >
                  ×
                </button>
              </div>
            ))}
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
              <input
                type="text"
                value={currentField.key}
                onChange={(e) => setCurrentField({ ...currentField, key: e.target.value })}
                placeholder="Field name (e.g. Hobbies)"
              />
              <input
                type="text"
                value={currentField.value}
                onChange={(e) => setCurrentField({ ...currentField, value: e.target.value })}
                placeholder="Field Information (e.g. Reading, Sports)"
              />
              <button type="button" onClick={addExtraField}>
                Add
              </button>
            </div>
          </div>

          <button type="submit">Submit All Information</button>
        </form>
      ) : (
        <div>
          <h2>Submitted Information</h2>
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>Age:</strong> {student.age}</p>
          <p><strong>Gender:</strong> {student.gender}</p>
          
          {/* Display extra fields */}
          {student.extraInfo.map((field) => (
            <p key={field.id}>
              <strong>{field.key}:</strong> {field.value}
            </p>
          ))}

          <button onClick={() => setSubmitted(false)} style={{ marginTop: '1rem' }}>
            Edit Information
          </button>
        </div>
      )}
    </div>
  );
}
