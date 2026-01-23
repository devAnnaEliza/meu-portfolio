import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useLanguage } from "../context/LanguageContext";

import brFlag from "../assets/icons/br.svg";
import usFlag from "../assets/icons/us.svg";

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();

  const handleLanguageToggle = () => {
    toggleLanguage(language === "pt" ? "en" : "pt");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        Anna — Full Stack Dev
      </div>

      <div className="navbar-menu">
        <NavLink to="/">{language === "pt" ? "Início" : "Home"}</NavLink>
        <NavLink to="/projetos">{language === "pt" ? "Projetos" : "Projects"}</NavLink>
        <NavLink to="/sobre">{language === "pt" ? "Sobre" : "About"}</NavLink>
        <NavLink to="/contato">{language === "pt" ? "Contato" : "Contact"}</NavLink>

        <button
          className="lang-toggle"
          onClick={handleLanguageToggle}
          aria-label="Alterar idioma"
        >
          <img
            src={language === "pt" ? usFlag : brFlag}
            alt="Idioma"
          />
        </button>

        <ThemeToggle />
      </div>
    </nav>
  );
}
