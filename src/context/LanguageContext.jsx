//import { createContext, useContext, useState } from "react";

//const LanguageContext = createContext();

//export function LanguageProvider({ children }) {
  //const [language, setLanguage] = useState("pt");

  //function toggleLanguage() {
    //setLanguage((prev) => (prev === "pt" ? "en" : "pt"));
  //}

  //return (
    //<LanguageContext.Provider value={{ language, toggleLanguage }}>
      //{children}
    //</LanguageContext.Provider>
  //);
//}

//export function useLanguage() {
  //const context = useContext(LanguageContext);

  //if (!context) {
    //throw new Error("useLanguage must be used within a LanguageProvider");
  //}

  //return context;
//}
