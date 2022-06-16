import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ENDPOINTS from "../../utils/constants/endpoint";
// import ENDPOINTS from "../../utils/constants/endpoint";
import Button from "../ui/Button";
import Container from "../ui/Container";
import { H2, H3 } from "../ui/Heading";
import IMG from "../ui/Image";
import P from "../ui/Paragraph";
import StyledDetailMovie from "./DetailMovie.styled";

function DetailMovie () {
    const [movie, setMovie] = useState("");

    const {id} = useParams();
    const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
    const trailer = movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`

    useEffect(() => {
        getDetailMovie();
    }, [id]);

    async function getDetailMovie () {
        const response = await axios(ENDPOINTS.DETAIL(id));
        
        setMovie(response.data);
    }

    return (
        <Container variant="White">
            <StyledDetailMovie>
                <div className="poster">
                    <IMG src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    alt={movie.Title}></IMG>
                </div>
                <div className="info">
                    <H2>{movie.title}</H2>
                    <H3>{genres}</H3>
                    <P variant="secondary">{movie.overview}</P>
                    <Button as="a" href={trailer} target="_blank" >Watch</Button>
                </div>
            </StyledDetailMovie>
        </Container>
    )
}

export default DetailMovie;