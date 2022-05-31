/**
 * Import CSS Module Footer.
 * Disimpan di object styles.
 */
import Container from "../ui/Container";
import { H1 } from "../ui/Heading";
import P from "../ui/Paragraph";
// import styles from "./Footer.module.css";

function Footer() {
  /**
   * Menggunakan styles yang sudah diimport.
   * Memanggilnya menggunakan expression.
   */
  return (
    <Container>
      <footer>
        <H1 variant="White">Movie App</H1>
        <P variant="White">Created by aufaroot18</P>
      </footer>
    </Container>
  );
}

export default Footer;
