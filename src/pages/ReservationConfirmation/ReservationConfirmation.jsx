import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from './ReservationConfirmation.module.css'

import bannerImg from '../../assets/images/restaurant.jpg'
import locationImg from '../../assets/logo.svg'

const ReservationConfirmation = () => {
    const { state } = useLocation()
    const navigate = useNavigate()

    const { date, time, guests, occasion } = state || {}

    return (
        <div className={styles.wrapper}>
            <img
                src={bannerImg}
                alt="Restaurant"
                className={styles.backgroundImage}
            />
            <div className={styles.container}>
                <h1>Your Reservation Is Confirmed!</h1>
                <h2>Modern Restaurant &amp; Bar</h2>

                <ul className={styles.details}>
                    <li>
                        <strong>DATE:</strong> {date}
                    </li>
                    <li>
                        <strong>TIME:</strong> {time}
                    </li>
                    <li>
                        <strong>GUESTS:</strong> {guests}
                    </li>
                    <li>
                        <strong>OCCASION:</strong> {occasion}
                    </li>
                </ul>

                <div className={styles.addressBox}>
                    <img
                        src={locationImg}
                        alt="Location icon"
                        className={styles.icon}
                    />
                    <p>
                        Little Lemon, E Chicago LaSalle Street
                        <br />
                        Chicago, Illinois 60602
                    </p>
                    <a
                        href="https://www.google.com/maps"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.btn}
                    >
                        Get Directions
                    </a>
                </div>

                <button onClick={() => navigate('/')} className={styles.btn}>
                    Go Home
                </button>
            </div>
        </div>
    )
}

export default ReservationConfirmation
