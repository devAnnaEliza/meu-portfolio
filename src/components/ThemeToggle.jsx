import { useEffect, useState } from "react";

function ThemeToggler() {
  const [theme, setTheme] = useState("light");

  // Inicializa tema ao carregar
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Alternar tema"
      className="theme-button"
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