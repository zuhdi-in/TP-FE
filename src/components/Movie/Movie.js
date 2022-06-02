import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie(props) {
    const {movie} = props;
    return(
        <div className={styles.movie}>
            <img
            className={styles.movie__image}
            src={movie.poster || `https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt=""
            />
            <Link to={`/movie/${movie.id}`}><h3 className={styles.movie__title} aria-label="asda">{movie.title}</h3></Link>
            <p className={styles.movie__date}>{movie.year || movie.release_date}</p>
        </div>
    )
}

export default Movie;