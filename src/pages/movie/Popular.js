import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";

function Popular() {
    // Simpan API_KEY dan URL ke variable
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

    // state penyimpanan data movies
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getPopular();   
    },[]);

    async function getPopular() {
        // Fetch data dari axios
        const response =await axios(URL);

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