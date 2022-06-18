import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import { updateMovies } from "../../features/moviesSlice";
import ENDPOINTS from "../../utils/constants/endpoint";

function Popular() {
    // state penyimpanan data movies    
    const dispatch = useDispatch();
    useEffect(() => {
        getPopular();   
    },[]);

    async function getPopular() {
        // Fetch data dari axios
        const response =await axios(ENDPOINTS.POPULAR);

        // simpan data ke state movies
        dispatch(updateMovies(response.data.results));
    };
    
    return (
    <div>
        <Hero/>
        <Movies  title="Popular Movie"/>
    </div>
    );
}

export default Popular;