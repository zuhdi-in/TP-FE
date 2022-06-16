import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";
import Container from "../ui/Container";
import StyledMovies from "./Movies.styled";
import { H2 } from "../ui/Heading";
import { useSelector } from "react-redux";

function Movies(props) {
  // gunakan selector untuk akses state redux: movies
  const movies = useSelector((store) => store.movies.movies)

  // function tambahfilm() {
  //   const movie = {
  //     id : nanoid(8),
  //     title : "Spiral Jigsaw",
  //     year : "2021",
  //     type : "Movie",
  //     poster : "https://picsum.photos/300/400"
  //   };

  //   setMovies([...movies, movie])
  // }

  return (
    <Container variant="White">
      <StyledMovies>
        <H2>{props.title}</H2>
        <div className={styles.movie__container}> 
          {movies.map(function(movie) {
              return <Movie key={movie.id} movie={movie}/>;
            })}
        </div>
      </StyledMovies>
    </Container>
  );
}

export default Movies;
