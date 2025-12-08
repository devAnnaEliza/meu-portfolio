export default function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <p>© {ano} Anna - Full Stack Dev</p>
        <p className="small">Feito com ❤️ — disponível no GitHub</p>
      </div>
    </footer>
  );
}
