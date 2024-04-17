import styles from './Card.module.css'
function Card() {
  return (
    <div className={styles.card}>
      <img className={styles.cardImage} src="https://via.placeholder.com/150" alt="profile picture" />
      <h2 className={styles.cardTitle}>Alejandrocsdev</h2>
      <p className={styles.cardText}>I'm going to become back-end engineer soon.</p>
    </div>
  )
}

export default Card
