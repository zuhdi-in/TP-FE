import styles from "./index.module.css";
import illustration from "../../assets/images/Ilustrasi-covid.png";

function Hero() {

    return (
        <div className={styles.container}>
            <section className={styles.hero} id="hero">
                <div className={styles.hero__left}>
                    <h1 className={styles.hero__title}>Waspada akan penularan dengan Monitoring Perkembangan Covid</h1>
                    <p className={styles.hero__desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                    <a className={styles.hero__button} href="https://www.pedulilindungi.id/">Daftar Vaksin</a>
                </div>
                <div className={styles.hero__right}>
                    <img src={illustration} alt="" className={styles.hero__image}/>
                </div>
            </section>
        </div>
    );
}

export default Hero;