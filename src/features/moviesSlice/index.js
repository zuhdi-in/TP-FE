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
        },
        deleteMovie() {},
    },
});

const moviesReducer = moviesSlice.reducer;
const { addMovie, deleteMovie } = moviesSlice.actions;

export default moviesReducer;
export {addMovie, deleteMovie};