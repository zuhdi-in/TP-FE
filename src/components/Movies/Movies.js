import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";
import { nanoid } from "nanoid";  
import Container from "../ui/Container";
import StyledMovies from "./Movies.styled";
import { H2 } from "../ui/Heading";
import Button from "../ui/Button";

function Movies(props) {
  const { movies, setMovies } = props;
  
  function tambahfilm() {
    const movie = {
      id : nanoid(8),
      title : "Spiral Jigsaw",
      year : "2021",
      type : "Movie",
      poster : "https://picsum.photos/300/400"
    };

    setMovies([...movies, movie])
  }

  return (
    <Container variant="White">
      <StyledMovies>
        <H2>Latest Movies</H2>
        <div className={styles.movie__container}> 
          {movies.map(function(movie) {
              return <Movie key={movie.id} movie={movie} />;
            })}
        </div>
        <Button onClick={tambahfilm}>Add Movie</Button>
        {/* <button onClick={tambahfilm}>Add Movie</button> */}
      </StyledMovies>
    </Container>
  );
}

export default Movies;
