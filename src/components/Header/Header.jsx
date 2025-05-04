import React from 'react'
import Nav from '../Nav/Nav'
import styles from './Header.module.css'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link to="/">
                        <img src={logo} alt="Little Lemon logo" />
                    </Link>
                </div>
                <Nav />
            </div>
        </header>
    )
}

export default Header
