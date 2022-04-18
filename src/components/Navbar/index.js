// import HamburgerMenu from "../HamburgerMenu";
import styles from "./index.module.css";

function Navbar() {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.navbar__left}>
          <h1 className={styles.navbar__brand}>covidid</h1>
        </div>
        <div className={styles.navbar__right}>
          <ul className={styles.navbar__list}>
            <li className={styles.navbar__item}><a href="#hero">Home</a></li>
            <li className={styles.navbar__item}><a href="#global">Indonesia</a></li>
            <li className={styles.navbar__item}><a href="#provinsi">Provinsi</a></li>
            <li className={styles.navbar__item}><a href="#form">Form</a></li>
          </ul>
        </div>
        {/* <HamburgerMenu /> */}
      </nav>  
    </div>  
  );
}

export default Navbar;
