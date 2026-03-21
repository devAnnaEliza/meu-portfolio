export default function Footer() {
    return (
    <footer>
      <div className="container">

        <div className="footer-links">
          <a 
            href="https://mail.google.com/mail/?view=cm&to=annaelizadev@gmail.com&su=Oportunidade%20de%20trabalho&body=Ol%C3%A1%2C%20Anna%20Eliza!%20Estou%20entrando%20em%20contato%20a%20respeito%20de%20uma%20oportunidade."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <ion-icon name="mail-outline"></ion-icon>
          </a>

          <a
            href="https://github.com/devAnnaEliza"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <ion-icon name="logo-github"></ion-icon>
          </a>

          <a
            href="https://linkedin.com/in/annaelizadev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </div>

        <p className="footer-copy">
          © Anna Eliza {new Date().getFullYear()}
        </p>

      </div>
    </footer>
  );
}