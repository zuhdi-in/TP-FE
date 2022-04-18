import styles from "./index.module.css";

function Card(props) {
    const {card} = props
    return(
        <div className={styles.card}>
            <h3 className={styles.card__status}>{card.status}</h3>
            <p className={styles.card__total} style={{color: card.status === "Meninggal" ? "#EF476F" : card.status === "Positif" && "#118AB2"}}>{card.total.toLocaleString()}</p>
        </div>
    )
}

export default Card;