import React from "react";


export const languageContext = React.createContext({ lang: "en-US", toggleLanguage: console.log });
export const LangProvider = languageContext.Provider;
export default languageContext;