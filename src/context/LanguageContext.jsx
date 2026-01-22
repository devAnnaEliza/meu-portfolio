import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import pt from "../i18n/pt";
import en from "../i18n/en";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("pt");

  const translations = language === "pt" ? pt : en;

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === "pt" ? "en" : "pt";
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage, t: translations }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};