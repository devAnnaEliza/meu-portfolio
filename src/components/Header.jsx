import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="header-text">
          <h1>Anna - Full Stack Dev</h1>
          <p className="subtitle">
            Desenvolvimento moderno, interfaces rápidas e aplicações funcionais.
          </p>
        </div>

        <div className="header-actions">
          <Link to="/projetos" className="cta-button" aria-label="Ver projetos">
            Ver projetos
          </Link>
        </div>
      </div>
    </header>
  );
}
