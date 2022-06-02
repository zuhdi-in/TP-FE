import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoint";

function Popular() {
    // state penyimpanan data movies    
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getPopular();   
    },[]);

    async function getPopular() {
        // Fetch data dari axios
        const response =await axios(ENDPOINTS.POPULAR);

        // simpan data ke state movies
        setMovies(response.data.results);
    };
    
    return (
    <div>
        <Hero/>
        <Movies movies={movies} title="Popular Movie"/>
    </div>
    );
}

export default Popular;