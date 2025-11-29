'use client';

import Link from 'next/link';
import styles from './page.module.css';
import { useEffect, useState } from 'react';
import HeroCarousel from './components/HeroCarousel';

export default function Home() {
    const [recentWorkouts, setRecentWorkouts] = useState<any[]>([]);

    useEffect(() => {
        const history = localStorage.getItem('workoutHistory');
        if (history) {
            setRecentWorkouts(JSON.parse(history).slice(0, 3));
        }
    }, []);

    return (
        <div className={styles.container}>
            {/* Hero Section */}
            <HeroCarousel />

            {/* Workout Plans Section */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Featured Workout Plans</h2>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <div className={styles.cardImage}>💪</div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>Muscle Gain</h3>
                            <p className={styles.cardText}>Intense strength training program designed to build muscle mass and strength.</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardImage}>🏃</div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>Weight Loss</h3>
                            <p className={styles.cardText}>High-intensity cardio and circuit training to burn fat and improve endurance.</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardImage}>🧘</div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>Flexibility & Core</h3>
                            <p className={styles.cardText}>Yoga and core strengthening routines for better posture and mobility.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Articles Section */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Latest Articles</h2>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>How to Reduce Belly Fat</h3>
                            <p className={styles.cardText}>Proven strategies to lose belly fat scientifically.</p>
                            <a href="https://www.healthline.com/nutrition/6-proven-ways-to-lose-belly-fat" target="_blank" rel="noopener noreferrer" className={styles.articleLink}>Read More →</a>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>The Best Pre-Workout Meals</h3>
                            <p className={styles.cardText}>Fuel your body for optimal performance with these meal ideas.</p>
                            <a href="https://www.healthline.com/nutrition/eat-before-workout" target="_blank" rel="noopener noreferrer" className={styles.articleLink}>Read More →</a>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>Benefits of HIIT</h3>
                            <p className={styles.cardText}>Why High-Intensity Interval Training is efficient for weight loss.</p>
                            <a href="https://www.healthline.com/nutrition/benefits-of-hiit" target="_blank" rel="noopener noreferrer" className={styles.articleLink}>Read More →</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recent History Section */}
            {recentWorkouts.length > 0 && (
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Your Recent Activity</h2>
                    <div className={styles.grid}>
                        {recentWorkouts.map((workout: any) => (
                            <div key={workout.id} className={styles.card}>
                                <div className={styles.cardContent}>
                                    <h3 className={styles.cardTitle}>{workout.workout}</h3>
                                    <p className={styles.cardText}>{new Date(workout.date).toLocaleDateString()} • {workout.duration} mins</p>
                                    <p style={{ color: '#8b5cf6', fontWeight: 'bold' }}>{workout.calories} kcal</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}
