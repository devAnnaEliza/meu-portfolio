export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <a href="mailto:annaelizadev@gmail.com">
            <ion-icon name="mail-outline" style={{ fontSize: '1.7rem' }}></ion-icon>
          </a>
          
          <a
            href="https://github.com/devAnnaEliza"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ion-icon name="logo-github" style={{ fontSize: '1.7rem' }}></ion-icon>
          </a>

          <a
            href="https://linkedin.com/in/annaelizadev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ion-icon name="logo-linkedin" style={{ fontSize: '1.7rem' }}></ion-icon>
          </a>
        </div>
        <p className="footer-copy">
         © Anna Eliza  {new Date().getFullYear()} Licensed
        </p>
      </div>
    </footer>
  );
}
