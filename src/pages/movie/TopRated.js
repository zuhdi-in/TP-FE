import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import { updateMovies } from "../../features/moviesSlice";
import ENDPOINTS from "../../utils/constants/endpoint";

function TopRated() {
    // state penyimpanan data movies
    const dispatch = useDispatch();

    useEffect(() => { getTopRated(); },[]);

    async function getTopRated() {
        // Fetch data dari axios
        const response =await axios(ENDPOINTS.TOP_RATED);

        // simpan data ke state movies
        dispatch(updateMovies(response.data.results));
    };

    return (
    <div>
        <Hero/>
        <Movies title="Top Rated Movies"/>
    </div>
    );
}

export default TopRated;