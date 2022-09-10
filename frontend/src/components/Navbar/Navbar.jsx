import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Navbar.scss";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-fixed fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <Logo />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link className="nav-link" to="/Signup">Signup</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Login">Login</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/swagger">Swagger</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}