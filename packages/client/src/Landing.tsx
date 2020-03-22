import React, { useState, useEffect } from 'react';
import App from "./components/App";
import WithLoading from "./components/hooks/HOC";
import usePages from "./components/hooks/usePages";
import { LangProvider } from "./components/contexts/lang";


const AppWithLoading = WithLoading(App);

const Landing = () => {
    const lang = navigator.language;

    const [loading, setLoading] = useState(false);
    const pages = usePages();

    useEffect(() => {
        if (pages.length) {
            setLoading(true);
        }
    }, [pages]);

    return (
        <LangProvider value={lang}>
            <AppWithLoading Loading={loading} pages={pages} lang={lang} />
        </LangProvider>
    );
};

export default Landing; 