import { nanoid } from "nanoid";
import React, { useState } from "react";
import styles from "./AddMovieForm.module.css"

function AddMovieForm(props) {
    
    const { movies, setMovies } = props;

    const [state, setState] = useState({
        IsTitleError: false,
        IsDateError: false,
        IsPosterError: false,
        title: "",
        date: "",
        type_movie: "default",
        poster: ""
    });

    function handleSubmit(e) {
        e.preventDefault();

        if (state.title === "") {
            setState({...state, IsTitleError: true});
            
        }
        else if (state.date === "") {
            setState({...state, IsDateError: true});
        }

        else if (state.poster === "") {
            setState({...state, IsPosterError: true});
        }
        
        else {
            const movie = {
                id : nanoid(10),
                title : state.title,
                year : state.date,
                type : state.type_movie,
                poster : state.poster
            };
            setMovies([...movies, movie])
            setState({...state, IsDateError: false});
            setState({...state, IsTitleError: false});
            setState({...state, IsPosterError: false});
        }
        
    }
    function handleChange(e) {
        const name = e.target.name;
        const value= e.target.value;
        setState({...state, [name]: value}) 

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
                                type="text" className={styles.AddMovieForm__input} name="title" value={state.title}/>
                            {state.IsTitleError ? <p>Title wajib diisi</p> : "" }
                        </div>
                        <div className={styles.AddMovieForm__form}>
                            <label className={styles.AddMovieForm__label}>Year</label>
                            <input
                                onChange={handleChange} 
                                type="number" className={styles.AddMovieForm__input} name="date" value={state.date}/>
                            {state.IsDateError ? <p>Date wajib diisi</p> : ""}
                        </div>
                        <div className={styles.AddMovieForm__form}>
                            <label className={styles.AddMovieForm__label}>Movie</label>
                            <select className={styles.AddMovieForm__input} name="type_movie" onChange={handleChange} value={state.type_movie}>
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
                                type="text" className={styles.AddMovieForm__input} name="poster" value={state.poster}/>
                            {state.IsPosterError ? <p>poster wajib diisi</p> : "" }
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