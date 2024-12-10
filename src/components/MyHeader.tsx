import { Link } from "react-router";
import logo from "../assets/logo4.png";

export default function MyHeader() {
  return (
    <>
      <Link to="/">
        <img src={logo} alt="Logo Volunteer - Doing Better" className="logo" />
      </Link>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/volunteers">Volunteers</Link>
          </li>
          <li>
            <Link to="/beneficiary">Beneficiary</Link>
          </li>
        </ul>
      </nav>
      <button className="btn">Sign In</button>
    </>
  );
}
