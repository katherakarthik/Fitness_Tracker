import styles from './ResultDisplay.module.css';

interface ResultDisplayProps {
    calories: number | null;
    summary: string | null;
}

export default function ResultDisplay({ calories, summary }: ResultDisplayProps) {
    if (calories === null) return null;

    return (
        <div className={styles.resultContainer}>
            <h3 className={styles.title}>Estimated Burn</h3>
            <div className={styles.calories}>{calories} kcal</div>
            {summary && <p className={styles.summary}>{summary}</p>}
        </div>
    );
}
