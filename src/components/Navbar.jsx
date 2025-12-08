import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">Anna - Full Stack Dev</NavLink>

        <nav className="navbar-menu">
          <NavLink to="/" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>Início</NavLink>
          <NavLink to="/projetos" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>Projetos</NavLink>
          <NavLink to="/blog" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>Blog</NavLink>
          <NavLink to="/sobre" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>Sobre</NavLink>
          <NavLink to="/contato" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>Contato</NavLink>

          {/* Theme toggle */}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
