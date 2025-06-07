"use client";
import WelcomeCard from './components/WelcomeCard';
import Counter from './components/Counter';
import StudentInfo from './components/StudentInfo';

export default function Home() {
  return (
    <main style={{
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      alignItems: 'center',
    }}>
      <h1>🚀 React Activity</h1>
      <WelcomeCard name="Harlie Khurt Canas" />
      <Counter />
      <StudentInfo />
    </main>
  );
}
