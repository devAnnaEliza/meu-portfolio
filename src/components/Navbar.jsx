import ThemeToggler from "./ThemeToggle.jsx";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Anna - Full Stack Dev</div>
      <div className="navbar-menu">
        <a href="/">Home</a>
        <a href="/projetos">Projetos</a>
        <a href="/blog">Blog</a>
        <a href="/sobre">Sobre</a>
        <a href="/contato">Contato</a>
        <ThemeToggler />
      </div>
    </nav>
  );
}

export default Navbar;
