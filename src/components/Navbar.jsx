import { Link, useLocation } from "react-router-dom";
import "../global.css";

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav>
      <div className="nav-container">
        <Link to="/" className="logo">
          Anna <span className="highlight">– Full Stack Dev</span>
        </Link>

        <ul>
          <li>
            <Link className={pathname === "/" ? "active" : ""} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={pathname === "/projetos" ? "active" : ""} to="/projetos">
              Projetos
            </Link>
          </li>
          <li>
            <Link className={pathname === "/blog" ? "active" : ""} to="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link className={pathname === "/sobre" ? "active" : ""} to="/sobre">
              Sobre
            </Link>
          </li>
          <li>
            <Link className={pathname === "/contato" ? "active" : ""} to="/contato">
              Contato
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
