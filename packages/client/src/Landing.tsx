import React, { useState, useEffect } from 'react';
import App from "./components/App";
import WithLoading from "./components/hooks/HOC";
import usePages from "./components/hooks/usePages";

const AppWithLoading = WithLoading(App);


const Landing = () => {
    const [loading, setLoading] = useState(false);
    const pages = usePages();

    useEffect(() => {
        if (pages.length) {
            setLoading(true);
        }
    }, [pages]);

    return (<AppWithLoading Loading={loading} pages={pages} />
    );
};

export default Landing; 