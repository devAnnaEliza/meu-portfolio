import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {

  return (
    <nav className="navbar">
      <div className="container">
        <NavLink to="/">{"Início"}</NavLink>
        <NavLink to="/projetos">{"Projetos"}</NavLink>
        <NavLink to="/sobre">{"Sobre"}</NavLink>
        <ThemeToggle />
      </div>
    </nav>
  );
}
