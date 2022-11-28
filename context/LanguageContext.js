import { LanguageContext } from "./Context";
import React, {useState} from 'react';

const initialLanguage = 'ES'

export const LanguageProvider = props => {
  const [language, setLanguageState] = useState(initialLanguage);

  const setLanguage = language => {
    setLanguageState(language)
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
      }}
    >
      {props.children}
    </LanguageContext.Provider>
  );
};