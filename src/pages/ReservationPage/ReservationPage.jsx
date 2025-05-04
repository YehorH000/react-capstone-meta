import React, { useState } from 'react'
import styles from './ReservationPage.module.css'
import { useNavigate } from 'react-router-dom'

const ReservationPage = () => {
    const navigate = useNavigate()

    const [date, setDate] = useState('')
    const [time, setTime] = useState('17:00')
    const [guests, setGuests] = useState(1)
    const [occasion, setOccasion] = useState('Birthday')

    const [errors, setErrors] = useState({})

    const validate = () => {
        const newErrors = {}

        if (!date || new Date(date) < new Date().setHours(0, 0, 0, 0)) {
            newErrors.date = 'Please select a valid future date.'
        }

        if (!time) {
            newErrors.time = 'Please select a time.'
        }

        if (guests < 1 || guests > 20) {
            newErrors.guests = 'Guests must be between 1 and 20.'
        }

        if (!occasion) {
            newErrors.occasion = 'Please select an occasion.'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!validate()) return

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
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                        />
                        {errors.date && (
                            <small className={styles.error}>
                                {errors.date}
                            </small>
                        )}
                    </label>

                    <label>
                        <span>Time:</span>
                        <select
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            required
                        >
                            <option value="">Select</option>
                            <option>17:00</option>
                            <option>18:00</option>
                            <option>19:00</option>
                            <option>20:00</option>
                            <option>21:00</option>
                        </select>
                        {errors.time && (
                            <small className={styles.error}>
                                {errors.time}
                            </small>
                        )}
                    </label>

                    <label>
                        <span>Number of Guests:</span>
                        <input
                            type="number"
                            value={guests}
                            onChange={(e) =>
                                setGuests(parseInt(e.target.value))
                            }
                            min="1"
                            max="20"
                            required
                        />
                        {errors.guests && (
                            <small className={styles.error}>
                                {errors.guests}
                            </small>
                        )}
                    </label>

                    <label>
                        <span>Occasion:</span>
                        <select
                            value={occasion}
                            onChange={(e) => setOccasion(e.target.value)}
                            required
                        >
                            <option value="">Select</option>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                            <option>Business Meeting</option>
                            <option>Other</option>
                        </select>
                        {errors.occasion && (
                            <small className={styles.error}>
                                {errors.occasion}
                            </small>
                        )}
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
