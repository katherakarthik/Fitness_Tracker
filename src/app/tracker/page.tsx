'use client';

import { useState, useEffect } from 'react';
import WorkoutForm from '../components/WorkoutForm';
import ResultDisplay from '../components/ResultDisplay';
import WorkoutHistory from '../components/WorkoutHistory';

interface WorkoutSession {
  id: string;
  date: string;
  workout: string;
  duration: number;
  calories: number;
  summary: string;
}

export default function Home() {
  const [calories, setCalories] = useState<number | null>(null);
  const [summary, setSummary] = useState<string | null>(null);
  const [history, setHistory] = useState<WorkoutSession[]>([]);

  useEffect(() => {
    const savedHistory = localStorage.getItem('workoutHistory');
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  const handleResult = (calories: number, summary: string, date: string, workout: string, duration: number) => {
    setCalories(calories);
    setSummary(summary);

    const newSession: WorkoutSession = {
      id: Date.now().toString(),
      date,
      workout,
      duration,
      calories,
      summary
    };

    const updatedHistory = [newSession, ...history];
    setHistory(updatedHistory);
    localStorage.setItem('workoutHistory', JSON.stringify(updatedHistory));
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <main style={{ width: '100%', maxWidth: '600px', position: 'relative', zIndex: 1 }}>
        <h1 style={{
          textAlign: 'center',
          marginBottom: '2rem',
          fontSize: '2.5rem',
          background: 'linear-gradient(to right, #fff, #94a3b8)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Fitness Tracker
        </h1>

        <WorkoutForm onResult={handleResult} />

        <ResultDisplay calories={calories} summary={summary} />

        <WorkoutHistory history={history} />
      </main>

      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        backgroundImage: 'url(/background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.5,
        pointerEvents: 'none'
      }} />
    </div>
  );
}
