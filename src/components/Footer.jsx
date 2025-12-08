export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <p className="footer-copy">
          Anna — Full Stack Dev © {new Date().getFullYear()}
        </p>

        <div className="footer-links">
          <a
            href="https://github.com/devAnnaEliza"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:anna.email@exemplo.com">
            Email
          </a>
        </div>

      </div>
    </footer>
  );
}
