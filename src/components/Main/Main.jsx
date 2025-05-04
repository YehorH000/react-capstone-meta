import React from 'react'
import styles from './Main.module.css'
import restaurantFood from '../../assets/images/restauranfood.jpg'
import greekSalad from '../../assets/images/greek-salad.jpg'
import bruchetta from '../../assets/images/bruchetta.svg'
import lemonDessert from '../../assets/images/lemon-dessert.jpg'
import { Link } from 'react-router-dom'

const specials = [
    {
        title: 'Greek salad',
        description:
            'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
        price: '$12.99',
        image: greekSalad,
    },
    {
        title: 'Bruschetta',
        description:
            'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
        price: '$5.89',
        image: bruchetta,
    },
    {
        title: 'Lemon Dessert',
        description:
            'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
        price: '$5.00',
        image: lemonDessert,
    },
]

const Main = () => {
    return (
        <main className={styles.specialsSection}>
            <section className={styles.hero}>
                <div className={styles.heroText}>
                    <h1 className={styles.heroTitle}>Little Lemon</h1>
                    <h2 className={styles.heroLocation}>Chicago</h2>
                    <p className={styles.heroDescription}>
                        We are a family owned Mediterranean restaurant, focused
                        on traditional recipes served with a modern twist.
                    </p>
                    <Link
                        to="/reservations"
                        className={`${styles.reserveButton} btn yellow`}
                    >
                        Reserve a Table
                    </Link>
                </div>
                <div className={styles.heroImageWrapper}>
                    <img
                        src={restaurantFood}
                        alt="Delicious dish"
                        className={styles.heroImage}
                    />
                </div>
            </section>

            <div className={styles.specialsHeader}>
                <h2 className={styles.specialsTitle}>This weeks specials!</h2>
                <button className={styles.onlineMenu}>Online Menu</button>
            </div>

            <div className={styles.specialsGrid}>
                {specials.map((item) => (
                    <div key={item.title} className={styles.card}>
                        <img src={item.image} alt={item.title} />
                        <div className={styles.cardBody}>
                            <div className={styles.cardTitlePrice}>
                                <span>{item.title}</span>
                                <span style={{ color: '#ee9972' }}>
                                    {item.price}
                                </span>
                            </div>
                            <p className={styles.cardText}>
                                {item.description}
                            </p>
                        </div>
                        <div className={styles.cardFooter}>
                            Order a delivery 🛵
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default Main
