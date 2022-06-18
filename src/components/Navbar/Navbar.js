/**
 * Import CSS Module Navbar.
 * Disimpan di object styles.
 */
import { Link } from "react-router-dom";
import Container from "../ui/Container";
import {H1} from "../ui/Heading";
// import styles from "./Navbar.module.css";
import StyledNavbar from "./Navbar.styled";

function Navbar() {
  /**
   * Menggunakan styles yang sudah diimport.
   * Memanggilnya menggunakan expression.
   */
  return (

    <Container>
      <StyledNavbar>
        <div>
          <H1>Movie App</H1>
        </div>
        <div>
          <ul>
            <li >
              <Link to="/">Home</Link>
            </li>
            <li >
              <Link to="/movie/create">Add Movie</Link>
            </li>
            <li >
              <Link to="/movie/popular">Popular</Link>
            </li>
            <li >
              <Link to="/movie/now">Now Playing</Link>
            </li>
            <li >
              <Link to="/movie/top">Top Rated</Link>
            </li>
          </ul>
        </div>
      </StyledNavbar>
    </Container>
  );
}

export default Navbar;
