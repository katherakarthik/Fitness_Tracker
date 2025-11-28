'use client';

import { useState } from 'react';
import styles from './WorkoutForm.module.css';

interface WorkoutFormProps {
    onResult: (calories: number, summary: string, date: string, workout: string, duration: number) => void;
}

export default function WorkoutForm({ onResult }: WorkoutFormProps) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const form = e.target as HTMLFormElement;
        const workout = (form.elements.namedItem('workout') as HTMLTextAreaElement).value;
        const duration = (form.elements.namedItem('duration') as HTMLInputElement).value;
        const date = (form.elements.namedItem('date') as HTMLInputElement).value;

        try {
            const response = await fetch('/api/calculate-calories', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ workout, duration: Number(duration) }),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                console.error('API Error:', errorData);
                throw new Error(errorData.error || 'Failed to calculate calories');
            }

            const data = await response.json();
            onResult(data.calories, data.summary, date, workout, Number(duration));
        } catch (err: any) {
            setError(err.message || 'Something went wrong. Please try again.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className={styles.formContainer} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
                <label htmlFor="date" className={styles.label}>
                    Date
                </label>
                <input
                    type="date"
                    id="date"
                    className={styles.input}
                    required
                    defaultValue={new Date().toISOString().split('T')[0]}
                    disabled={loading}
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="workout" className={styles.label}>
                    What workout did you do?
                </label>
                <textarea
                    id="workout"
                    className={styles.textarea}
                    placeholder="e.g., 30 mins running, 3 sets of bench press..."
                    required
                    disabled={loading}
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="duration" className={styles.label}>
                    Duration (minutes)
                </label>
                <input
                    type="number"
                    id="duration"
                    className={styles.input}
                    placeholder="e.g., 45"
                    min="1"
                    required
                    disabled={loading}
                />
            </div>

            {error && <div style={{ color: '#ef4444', marginBottom: '1rem', textAlign: 'center' }}>{error}</div>}

            <button type="submit" className={styles.button} disabled={loading}>
                {loading ? 'Calculating...' : 'Calculate Calories'}
            </button>
        </form>
    );
}
