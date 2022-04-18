import styles from "./index.module.css"

function Footer() {
  return (
    <div className={styles.container}>
      <nav className={styles.footer}>
        <div className={styles.footer__left}>
          <h1 className={styles.footer__brand}>covidid</h1>
          <p>Created by daydeyo studio</p>
        </div>
        <div className={styles.footer__right}>
          <ul className={styles.footer__list}>
            <li className={styles.footer__item}>Global</li>
            <li className={styles.footer__item}>Indonesia</li>
            <li className={styles.footer__item}>Provinsi</li>
            <li className={styles.footer__item}>About</li>
          </ul>
        </div>
      </nav>  
    </div>  
  );
}

export default Footer;
