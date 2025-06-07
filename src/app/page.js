"use client";
import WelcomeCard from './components/WelcomeCard';
import Counter from './components/Counter';
import StudentInfo from './components/StudentInfo';

export default function Home() {
  return (
    <main>
      <div className="overlay">
        <WelcomeCard defaultName="Guest" />
        <Counter />
        <StudentInfo />
      </div>
    </main>
  );
}
