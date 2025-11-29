'use client';

import { useState, useEffect } from 'react';
import styles from './HeroCarousel.module.css';
import Link from 'next/link';

const slides = [
    {
        id: 1,
        image: '/ssmb_29.jpg',
        title: 'Transform Your Body',
        subtitle: 'Track your workouts, calculate calories, and achieve your dream physique.',
        cta: 'Start Tracking',
        link: '/tracker'
    },
    {
        id: 2,
        // background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
        image: '/ssmb_29_1.jpeg',
        title: 'Expert Diet Plans',
        subtitle: 'Fuel your body with our 7-day vegetarian and non-vegetarian meal plans.',
        cta: 'View Diets',
        link: '/diet-plans'
    },
    {
        id: 3,
        // background: 'linear-gradient(135deg, #10b981 0%, #047857 100%)',
        image: '/spider_man.jpeg',
        title: 'Track Your Progress',
        subtitle: 'Monitor your history and see how far you have come.',
        cta: 'Check History',
        link: '/tracker'
    }
];

export default function HeroCarousel() {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1);
    };

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, [current]);

    return (
        <div className={styles.carousel}>
            {slides.map((slide: any, index) => (
                <div
                    key={slide.id}
                    className={`${styles.slide} ${index === current ? styles.active : ''}`}
                    style={{
                        background: slide.image ? `url(${slide.image}) center/cover no-repeat` : slide.background
                    }}
                >
                    <div className={styles.content}>
                        <h1 className={styles.title}>{slide.title}</h1>
                        <p className={styles.subtitle}>{slide.subtitle}</p>
                        <Link href={slide.link} className="cta-button" style={{
                            display: 'inline-block',
                            padding: '1rem 2rem',
                            background: '#3b82f6',
                            color: 'white',
                            borderRadius: '9999px',
                            fontWeight: 'bold',
                            textDecoration: 'none',
                            transition: 'background 0.2s'
                        }}>
                            {slide.cta}
                        </Link>
                    </div>
                </div>
            ))}

            <button className={`${styles.arrow} ${styles.prev}`} onClick={prevSlide}>
                &#10094;
            </button>
            <button className={`${styles.arrow} ${styles.next}`} onClick={nextSlide}>
                &#10095;
            </button>

            <div className={styles.indicators}>
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`${styles.dot} ${index === current ? styles.activeDot : ''}`}
                        onClick={() => setCurrent(index)}
                    />
                ))}
            </div>
        </div>
    );
}
