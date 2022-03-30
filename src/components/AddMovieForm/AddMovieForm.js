import styles from "./AddMovieForm.module.css"

function AddMovieForm() {
    return(
        <div className={styles.container}>
            <section className={styles.AddMovieForm}>
                <div className={styles.AddMovieForm__left}>
                    <img className={styles.AddMovieForm__image} src="https://picsum.photos/536/354" alt="placeholder"
                    />
                </div>
                <div className={styles.AddMovieForm__right}>
                    <h2 className={styles.AddMovieForm__title}> Add Movie</h2>
                    <form action="GET">
                        <div className={styles.AddMovieForm__form}>
                            <label className={styles.AddMovieForm__label}>Title</label>
                            <input type="text" className={styles.AddMovieForm__input} name="title"/>
                        </div>
                        <div className={styles.AddMovieForm__form}>
                            <label className={styles.AddMovieForm__label}>Year</label>
                            <input type="text" className={styles.AddMovieForm__input} name="year"/>
                        </div>
                        <input type="submit" className={styles.AddMovieForm__button} value="Submit"/>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default AddMovieForm;