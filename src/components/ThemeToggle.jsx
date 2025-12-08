import { useEffect, useState } from "react";
import { moon, sunny } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

function ThemeToggler() {
  const [theme, setTheme] = useState("light");

  // carrega tema salvo ou identifica o tema do sistema
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initialTheme = systemPrefersDark ? "dark" : "light";
      setTheme(initialTheme);
      document.documentElement.classList.toggle("dark", initialTheme === "dark");
    }
  }, []);

  // alternar tema
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
      style={{
        background: "transparent",
        border: "none",
        cursor: "pointer",
        fontSize: "1.5rem",
        display: "flex",
        alignItems: "center",
      }}
    >
      <IonIcon icon={theme === "light" ? moon : sunny} />
    </button>
  );
}

export default ThemeToggler;
