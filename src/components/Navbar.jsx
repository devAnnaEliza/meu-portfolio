import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
//import { useLanguage } from "../context/LanguageContext";
//import LanguageToggle from "./LanguageToggle";


export default function Navbar() {
  //const { language, toggleLanguage } = useLanguage();

  //const handleLanguageToggle = () => {
    //toggleLanguage(language === "pt" ? "en" : "pt");
  //};

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        Anna — Full Stack Dev
      </div>

      <div className="navbar-menu">
        <NavLink to="/">{"Início"}</NavLink>
        <NavLink to="/projetos">{"Projetos"}</NavLink>
        <NavLink to="/sobre">{"Sobre"}</NavLink>
        {/*<NavLink to="/contato">{"Contato"}</NavLink>*/}

        {/*<button
          className="lang-toggle"
          onClick={handleLanguageToggle}
          aria-label="Alterar idioma"
        >
        </button>*/}

        <ThemeToggle />
      </div>
    </nav>
  );
}
