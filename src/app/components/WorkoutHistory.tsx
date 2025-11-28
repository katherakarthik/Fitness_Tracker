import styles from './WorkoutHistory.module.css';

interface WorkoutSession {
    id: string;
    date: string;
    workout: string;
    duration: number;
    calories: number;
    summary: string;
}

interface WorkoutHistoryProps {
    history: WorkoutSession[];
}

export default function WorkoutHistory({ history }: WorkoutHistoryProps) {
    if (history.length === 0) {
        return (
            <div className={styles.historyContainer}>
                <h2 className={styles.title}>Workout History</h2>
                <div className={styles.empty}>No workouts recorded yet. Start training!</div>
            </div>
        );
    }

    return (
        <div className={styles.historyContainer}>
            <h2 className={styles.title}>Workout History</h2>
            <ul className={styles.list}>
                {history.map((session) => (
                    <li key={session.id} className={styles.card}>
                        <div className={styles.header}>
                            <span className={styles.date}>{new Date(session.date).toLocaleDateString()}</span>
                            <span className={styles.calories}>{session.calories} kcal</span>
                        </div>
                        <div className={styles.workout}>{session.workout} ({session.duration} mins)</div>
                        <div className={styles.summary}>{session.summary}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
