import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie";
import Movies from "../../components/Movies/Movies";
import { updateMovies } from "../../features/moviesSlice";
import ENDPOINTS from "../../utils/constants/endpoint";

function Detail () {
    const {id} = useParams();
    // state penyimpanan data movies
    const dispatch = useDispatch();

    useEffect(() => { getRecomenMovie(); },[id]);

    async function getRecomenMovie() {
        // Fetch data dari axios
        
        const response =await axios(ENDPOINTS.RECOMMENDATION(id));

        // simpan data ke state movies
        dispatch(updateMovies(response.data.results));  
    };

    return (
        <div>
            <DetailMovie /> 
            <Movies title="Recomendations"/>
        </div>
    );
}

export default Detail;