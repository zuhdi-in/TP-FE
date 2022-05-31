import styles from "./Hero.module.css";
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import { H2, H3 } from "../ui/Heading";
import P from "../ui/Paragraph";
import IMG from "../ui/Image";
import Container from "../ui/Container";
import StyledHero from "./Hero.styled";
import axios from "axios";




function Hero() {
  const [movie, setMovie] = useState("");
  const API_KEY = process.env.REACT_APP_API_KEY; 

  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");

  const trailer = movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`
  // async function fetchMovie() {
  //   const response = await fetch(
  //     "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590"
  //   );

  //   const data = await response.json();

  //   setMovie(data);
  // }

  useEffect(getDetailMovie, []);

  async function getTrendingMovies() {
    const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
    const response = await axios(URL);
    return response.data.results[0];
    
  }

  async function getDetailMovie() {
    // ambil id dari trendingMovie
    const trendingMovie = await getTrendingMovies();
    const id = trendingMovie.id;

    // fetch detail movie by id
    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US&append_to_response=videos`;
    const response = await axios(URL);

    setMovie(response.data);
  }

  return (
    <Container variant="White">
      <StyledHero>
        <div >
          <H2>{movie.title}</H2>
          <H3>{genres}</H3>
          <P variant="secondary">{movie.overview}</P>
          <Button as="a" href={trailer} target="_blank" variant="primary">Watch</Button>
        </div>
        <div >
          <IMG src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt={movie.Title}></IMG>
        </div>
      </StyledHero>
    </Container>
  );
}

export default Hero;
