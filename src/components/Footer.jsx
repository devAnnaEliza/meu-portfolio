export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {year} Anna – Full Stack Dev</p>
    </footer>
  );
}
