import { Link } from "react-router-dom";

import Container from "./Container";
import styles from "./Navbar.module.css";
import logo from '../../img/icon.png'

function Navbar() {
  return (
    <nav class={styles.navbar}>
      <Container>
            <Link to="/">
                <img src={logo} alt="icon" style={{ width: '85px', height: '85px' }} />
            </Link>
        <ul className={styles.list}>
            <li className={styles.item}>
            <Link to="/">HOME</Link>
            </li>
            <li className={styles.item}>
            <Link to="/informacoes">INFORMAÇÕES</Link>
            </li>
            <li className={styles.item}>
            <Link to="/contato">CONTATO</Link>
            </li>
        </ul>
      </Container>
    </nav>
  );
}

        
        

export default Navbar;
