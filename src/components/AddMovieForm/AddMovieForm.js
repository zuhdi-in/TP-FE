import { nanoid } from "nanoid";
import React, { useState } from "react";
import styles from "./AddMovieForm.module.css"

function AddMovieForm(props) {

    const { movies, setMovies } = props;

    const [formData, setFormData] = useState({
        title: "",
        date: "",
        type_movie: "default",
        poster: ""
    });

    const [validateData, setValidateData] = useState({
        IsTitleError: false,
        IsDateError: false,
        IsPosterError: false
    })
    
    const { title, date, poster, type_movie } = formData;

    function validate(e) {

        if (title === "") {
            setValidateData({...validateData, IsTitleError: true});
            return false;
        }

        else if (date === "") {
            setValidateData({...validateData, IsDateError: true, IsTitleError: false});
            return false;
        }

        else if (poster === "") {
            setValidateData({...validateData, IsPosterError: true, IsTitleError: false, IsDateError: false});
            return false;
        }
 
        else {
            setValidateData({...validateData, IsTitleError: false, IsDateError: false, IsPosterError: false});
            return true;
        }
    }

    function addMovie() {
        const movie = {
            id : nanoid(10),
            title : title,
            year : date,
            type : type_movie,
            poster : poster
        };
        setMovies([...movies, movie])
    }

    function handleSubmit(e) {
        e.preventDefault();

        validate() && addMovie();       
    }
    
    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value}) 
    }

    return(
        <div className={styles.container}>
            <section className={styles.AddMovieForm}>
                <div className={styles.AddMovieForm__left}>
                    <img className={styles.AddMovieForm__image} src="https://picsum.photos/536/354" alt="placeholder"
                    />
                </div>
                <div className={styles.AddMovieForm__right}>
                    <h2 className={styles.AddMovieForm__title}> Add Movie</h2>
                    <form onSubmit={handleSubmit} >
                        <div className={styles.AddMovieForm__form}>
                            <label className={styles.AddMovieForm__label}>Title</label>
                            <input
                                onChange={handleChange} 
                                type="text" className={styles.AddMovieForm__input} name="title" value={title}/>
                            {validateData.IsTitleError ? <p>Title wajib diisi</p> : "" }
                        </div>
                        <div className={styles.AddMovieForm__form}>
                            <label className={styles.AddMovieForm__label}>Year</label>
                            <input
                                onChange={handleChange} 
                                type="number" className={styles.AddMovieForm__input} name="date" value={date}/>
                            {validateData.IsDateError ? <p>Date wajib diisi</p> : ""}
                        </div>
                        <div className={styles.AddMovieForm__form}>
                            <label className={styles.AddMovieForm__label}>Movie</label>
                            <select className={styles.AddMovieForm__input} name="type_movie" onChange={handleChange} value={type_movie}>
                                <option value="Action">Action</option>
                                <option value="Drama">Drama</option>
                                <option value="Horror">Horror</option>
                                <option value="Comedy">Comedy</option>
                            </select>
                        </div>
                        <div className={styles.AddMovieForm__form}>
                            <label className={styles.AddMovieForm__label}>Poster</label>
                            <input
                                onChange={handleChange} 
                                type="text" className={styles.AddMovieForm__input} name="poster" value={poster}/>
                            {validateData.IsPosterError ? <p>poster wajib diisi</p> : "" }
                        </div>
                        <input
                            type="submit" className={styles.AddMovieForm__button} value="Submit"/>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default AddMovieForm;