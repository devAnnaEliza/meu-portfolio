import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        <h1 className="nav-logo">Anna - Full Stack Dev</h1>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projetos">Projetos</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/contato">Contato</Link></li>
        </ul>

      </div>
    </nav>
  );
}
