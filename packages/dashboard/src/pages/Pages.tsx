import React from 'react';
import CardList from '../components/CardList';
import usePages from "../components/hooks/usePages";

const Pages = () => {
    const pages = usePages();

    return (<CardList items={pages} />
    );
};

export default Pages;