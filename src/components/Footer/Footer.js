/**
 * Import CSS Module Footer.
 * Disimpan di object styles.
 */
import Container from "../ui/Container";
import { H2 } from "../ui/Heading";
import P from "../ui/Paragraph";
import styles from "./Footer.module.css";

function Footer() {
  /**
   * Menggunakan styles yang sudah diimport.
   * Memanggilnya menggunakan expression.
   */
  return (
    <Container>
      <footer>
        <H2 variant="White">Movie App</H2>
        <P variant="White">Created by aufaroot18</P>
      </footer>
    </Container>
  );
}

export default Footer;
