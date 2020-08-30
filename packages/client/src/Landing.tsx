import React, { useState, useEffect } from 'react';
import App from "./components/App";
import WithLoading from "./components/hooks/HOC";
import usePages from "./components/hooks/usePages";
import { LangProvider } from "./components/contexts/lang";


const AppWithLoading = WithLoading(App);

const Landing = () => {
    const lang = navigator.language;
    
    const [language, setLnaguage] = useState(lang==="de"?"de":"en-US")

    const [loading, setLoading] = useState(false);
    const pages = usePages();
    const toggleLanguage = () => {
        setLnaguage(language === "en-US" ? "de" : "en-US")
    }
    useEffect(() => {
        if (pages.length) {
            setLoading(true);
        }
    }, [pages]);

    return (
        <LangProvider value={{ lang: language, toggleLanguage }}>
            <AppWithLoading Loading={loading} pages={pages} lang={language} />
        </LangProvider>
    );
};

export default Landing; 