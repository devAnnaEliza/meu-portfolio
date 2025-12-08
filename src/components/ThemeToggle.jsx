import { useEffect, useState } from "react";

/**
 * ThemeToggle
 * - Persiste escolha em localStorage (key: "theme")
 * - Se usuário ainda não escolheu, usa prefers-color-scheme
 * - Define attribute data-theme no <html> para o CSS usar
 */
export default function ThemeToggle() {
  const STORAGE_KEY = "theme";
  const [theme, setTheme] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "light" || stored === "dark") return stored;
      // fallback: system preference
      const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      return prefersDark ? "dark" : "light";
    } catch {
      return "dark";
    }
  });

  useEffect(() => {
    // Apply to root (html)
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {}
  }, [theme]);

  function toggleTheme() {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }

  return (
    <button
      aria-label="Alternar tema"
      title={theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
      className="theme-toggle-btn"
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        // sun icon (light mode)
        <ion-icon name="sunny-outline" aria-hidden="true"></ion-icon>
      ) : (
        // moon icon (dark mode)
        <ion-icon name="moon-outline" aria-hidden="true"></ion-icon>
      )}
    </button>
  );
}
