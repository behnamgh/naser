import React from "react";


export const languageContext = React.createContext("en-US");
export const LangProvider = languageContext.Provider;
export default languageContext;