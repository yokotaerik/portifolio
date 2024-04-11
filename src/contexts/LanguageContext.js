import React, { createContext, useState, useContext } from "react";

const LanguageContext = createContext({});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const texts = {
    en: {
      greeting: "Hello!",
      buttonText: "Change Language"
    },
    pt: {
      greeting: "Olá!",
      buttonText: "Mudar Idioma"
    }
  };

  const setLanguageToEn = () => {
    setLanguage("en");
  };

  const setLanguageToPt = () => {
    setLanguage("pt");
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguageToEn, setLanguageToPt, texts }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);