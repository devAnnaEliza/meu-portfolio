/* eslint-disable react/jsx-no-comment-textnodes */
import ThemeToggle from "./ThemeToggle";
import { useScrolled } from "../hooks/useScrolled";
import { useScrolledOnce } from "../hooks/useScrolledOnce";

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const scrolling = useScrolled();
  const scrolled = useScrolledOnce();

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""} ${scrolling ? "navbar--scrolling" : ""}`}>
      <div className="container navbar-content">
        <button className="nav-logo" onClick={() => scrollTo("inicio")}>
          ae.
        </button>
        <div className="nav-links">
          <button onClick={() => scrollTo("inicio")}>// início</button>
          <button onClick={() => scrollTo("projetos")}>// projetos</button>
          <button onClick={() => scrollTo("sobre")}>// sobre</button>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
}