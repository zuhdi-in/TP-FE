import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoint";

function Detail () {
    const {id} = useParams();
    // state penyimpanan data movies
    const [movies, setMovies] = useState([]);

    useEffect(() => { getRecomenMovie(); },[id]);

    async function getRecomenMovie() {
        // Fetch data dari axios
        
        const response =await axios(ENDPOINTS.RECOMMENDATION(id));

        // simpan data ke state movies
        setMovies(response.data.results);
    };

    return (
        <div>
            <DetailMovie /> 
            <Movies movies={movies} title="Recomendations"/>
        </div>
    );
}

export default Detail;