import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constants/data";

/** 
 * buat Slice untuk generate action reducers
 * params object:name, initialState, reducers
*/

const moviesSlice = createSlice({
    name: "Movies Slice", // nama slice
    initialState: { 
        // nilai awal state movies
        movies: data,
    },
    reducers: { 
        // membuat reducer: untuk update state
        addMovie(state, action) {
            state.movies.push(action.payload);
            // console.log(action.payload);
            // localStorage.setItem(action.payload.id, JSON.stringify(action.payload));
        },
        updateMovies(state, action) {
            state.movies = action.payload;
        },
    },
});

const moviesReducer = moviesSlice.reducer;
const { addMovie, updateMovies } = moviesSlice.actions;

export default moviesReducer;
export {addMovie, updateMovies};