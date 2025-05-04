import React, { useState } from 'react'
import styles from './Nav.module.css'

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className={styles.nav}>
            <button
                className={styles.burger}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle navigation menu"
                aria-expanded={isOpen}
                aria-controls="navigation-menu"
            >
                ☰
            </button>
            <ul
                id="navigation-menu"
                className={`${styles.navList} ${isOpen ? styles.open : ''}`}
            >
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Menu</a>
                </li>
                <li>
                    <a href="#">Reservations</a>
                </li>
                <li>
                    <a href="#">Order Online</a>
                </li>
                <li>
                    <a href="#">Login</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
