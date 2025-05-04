import React, { useState } from 'react'
import styles from './ReservationPage.module.css'
import { useNavigate } from 'react-router-dom'

const ReservationPage = () => {
    const navigate = useNavigate()

    const [date, setDate] = useState('')
    const [time, setTime] = useState('17:00')
    const [guests, setGuests] = useState(1)
    const [occasion, setOccasion] = useState('Birthday')

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = { date, time, guests, occasion }
        navigate('/confirmation', { state: formData })
    }

    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <h1 className={styles.title}>Little Lemon</h1>
                <h2 className={styles.subheading}>Chicago</h2>
                <h3 className={styles.tagline}>
                    Find a table for any occasion
                </h3>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <label>
                        <span>Date:</span>
                        <input
                            type="date"
                            required
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </label>

                    <label>
                        <span>Time:</span>
                        <select
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                        >
                            <option>17:00</option>
                            <option>18:00</option>
                            <option>19:00</option>
                            <option>20:00</option>
                            <option>21:00</option>
                        </select>
                    </label>

                    <label>
                        <span>Number of Guests:</span>
                        <input
                            type="number"
                            min="1"
                            max="20"
                            placeholder="1-20"
                            required
                            value={guests}
                            onChange={(e) => setGuests(e.target.value)}
                        />
                    </label>

                    <label>
                        <span>Occasion:</span>
                        <select
                            value={occasion}
                            onChange={(e) => setOccasion(e.target.value)}
                        >
                            <option>Birthday</option>
                            <option>Anniversary</option>
                            <option>Business Meeting</option>
                            <option>Other</option>
                        </select>
                    </label>

                    <button type="submit" className={styles.submitButton}>
                        Make Your Reservation
                    </button>
                </form>
            </div>
        </section>
    )
}

export default ReservationPage
