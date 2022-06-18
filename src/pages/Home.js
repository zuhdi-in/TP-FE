// Import Navbar, Hero, Movies, Footer Component
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import AddMovieForm from "../components/AddMovieForm/AddMovieForm";
import data from "../utils/constants/data";
import moviesReducer, { updateMovies } from "../features/moviesSlice";
import { useDispatch, useSelector } from "react-redux";


/**
 * Membuat Component Home.
 * Menampilkan Halaman Home.
 * Menampung Navbar, Main, dan Footer Component
 */
function Home() {
  const movies = useSelector((store) => store.movies.movies);
  localStorage.getItem('movies', JSON.stringify(movies));
  const dispatch = useDispatch();
  dispatch(updateMovies(movies))
  console.log(movies);
  return (
    <>
      <Hero />
      <Movies title="Latest Movie"/>
    </>
  );
}

export default Home;
