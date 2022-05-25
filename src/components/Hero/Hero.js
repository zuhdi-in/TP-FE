import styles from "./Hero.module.css";
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import { H2, H3 } from "../ui/Heading";
import P from "../ui/Paragraph";
import IMG from "../ui/Image";
import Container from "../ui/Container";
import StyledHero from "./Hero.styled";




function Hero() {
  const [movie, setMovie] = useState("");

  async function fetchMovie() {
    const response = await fetch(
      "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590"
    );

    const data = await response.json();

    setMovie(data);
  }

  useEffect(fetchMovie, []);
  console.log(movie);
  return (
    <Container variant="White">
      <StyledHero>
        <div >
          <H2>{movie.Title}</H2>
          <H3>{movie.Genre}</H3>
          <P>{movie.Plot}</P>
          <Button variant="primary">Watch</Button>
        </div>
        <div >
          <IMG src={movie.Poster}
            alt={movie.Title}></IMG>
        </div>
      </StyledHero>
    </Container>
  );
}

export default Hero;
