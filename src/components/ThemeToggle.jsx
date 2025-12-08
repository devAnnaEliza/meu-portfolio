import { useEffect, useState } from "react";

function ThemeToggler() {
  const [theme, setTheme] = useState("light");

  // Inicializa tema ao carregar
  useEffect(() => {
    // Busca tema salvo
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      // Detecta preferencia do sistema
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  // Alterna tema
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    // Aplica classe dark no HTML
    document.documentElement.classList.toggle("dark", newTheme === "dark");

    // Salva no localStorage
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Alternar tema"
      className="theme-button"
      style={{
        background: "transparent",
        border: "none",
        cursor: "pointer",
        fontSize: "1.5rem",
        display: "flex",
        alignItems: "center",
        color: "var(--texto)"
      }}
    >
      {theme === "light" ? (
        <ion-icon name="moon-outline"></ion-icon>
      ) : (
        <ion-icon name="sunny-outline"></ion-icon>
      )}
    </button>
  );
}

export default ThemeToggler;
