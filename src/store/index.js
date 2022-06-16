// import configureStore: untuk membuat store
import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/moviesSlice";

/**
 * Membuat store: untuk state global
 * menerima param object: reducer
 * menyimpan slice yang sudah di buat
 */
const store = configureStore({
    reducer: {
        movies: moviesReducer,
    },
});

// export default store
export default store;