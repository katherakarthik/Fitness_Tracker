'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className={styles.navbar}>
            <Link href="/" className={styles.logo}>
                FitTrack
            </Link>
            <div className={styles.links}>
                <Link
                    href="/"
                    className={`${styles.link} ${pathname === '/' ? styles.active : ''}`}
                >
                    Home
                </Link>
                <Link
                    href="/tracker"
                    className={`${styles.link} ${pathname === '/tracker' ? styles.active : ''}`}
                >
                    Tracker
                </Link>
                <Link
                    href="/diet-plans"
                    className={`${styles.link} ${pathname === '/diet-plans' ? styles.active : ''}`}
                >
                    Diet Plans
                </Link>
            </div>
        </nav>
    );
}
