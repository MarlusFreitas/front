import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
        <a href="https://www.facebook.com/marlus.roberto.5" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
          </a>
        </li>
        <li>
        <a href="https://www.instagram.com/marlusroberto/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
          </a>
        </li>
        <li>
        <a href="https://www.linkedin.com/in/marlus-freitas/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        </li>
        <li>
        <a href="https://github.com/MarlusFreitas" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>Projeto_A3</span> &copy; 2023 - Marlus Freitas
      </p>
    </footer>
  );
}

export default Footer;
