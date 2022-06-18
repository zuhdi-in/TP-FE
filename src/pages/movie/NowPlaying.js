import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import { updateMovies } from "../../features/moviesSlice";
import ENDPOINTS from "../../utils/constants/endpoint";

function NowPlaying() {
    // state penyimpanan data movies
    const dispatch = useDispatch();

    useEffect(() => { getNowPlaying(); },[]);

    async function getNowPlaying() {
        // Fetch data dari axios
        const response =await axios(ENDPOINTS.NOW_PLAYING);

        // simpan data ke state movies
        dispatch(updateMovies(response.data.results));
    };

    return (
    <div>
        <Hero/>
        <Movies title="Now Playing Movies"/>
    </div>
    );
}

export default NowPlaying;