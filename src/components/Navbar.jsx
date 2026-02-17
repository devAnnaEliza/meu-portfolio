import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <div className="nav-links">
          <NavLink to="/" end>Início</NavLink>
          <NavLink to="/projetos">Projetos</NavLink>
          <NavLink to="/sobre">Sobre</NavLink>
        </div>

        <ThemeToggle />
      </div>
    </nav>
  );
}
