import { Link } from "react-router";
import logo from "../assets/logo4.png";
import styles from '../styles/MyHeader.module.css';

export default function MyHeader() {
  return (
    <header className={styles.headerContainer}>
      <Link to="/">
        <img src={logo} alt="Logo Volunteer - Doing Better" className="logo" style={{ height: "60px" }} />
      </Link>
      <nav className={styles.navContainer}>
        <ul>
        <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
          <li>
            <Link to="/volunteers">Voluntários</Link>
          </li>
          <li>
            <Link to="/beneficiaries">Beneficiários</Link>
          </li>
        </ul>
      </nav>
      <button className="btn btn-primary">Entrar</button>
    </header>
  );
}
