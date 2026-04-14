import React, { createContext, useState, useContext, useEffect } from 'react';
import { translations } from '../translations/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Try to get language from localStorage, default to 'ID'
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('appLanguage') || 'ID';
  });

  useEffect(() => {
    localStorage.setItem('appLanguage', language);
  }, [language]);

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        // Fallback to ID if key missing in EN, or return the key itself
        value = translations['ID'];
        for (const ik of keys) {
          if (value && value[ik]) {
            value = value[ik];
          } else {
            return key; 
          }
        }
        return value;
      }
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
