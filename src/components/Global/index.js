import styles from "./index.module.css";
import Card from "../Card/index";
import data from "../../utils/constants/indonesia"

function Global () {
    const cards = data.indonesia;
    
    return(
        <div className={styles.container} >
            <section className={styles.global} id="global">
                <div>
                    <h2 className={styles.global__title}>Data Perkembangan Covid-19 di Indonesia</h2>
                    <p className={styles.global__subtitle}>Data Covid Berdasarkan Global</p>
                </div>
                <div className={styles.global__card}> 
                    {cards.map(function(card) {return <Card key={card.status} card={card}/>})}    
                </div>
            </section>
        </div>
    )
}

export default Global;