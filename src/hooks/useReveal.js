import { useEffect } from "react";

/**
 * Observa todos os elementos com classe `.reveal` dentro do documento
 * e adiciona `.visible` quando entram na viewport.
 * Deve ser chamado uma vez no componente raiz da página.
 */
export function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Para de observar após revelar — animação roda só uma vez
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}