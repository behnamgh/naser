import React from 'react';
import CardList from '../components/CardList';
import usePages from "../components/hooks/usePages"
const Pages = () => {
    const pages = usePages();
    const items = [{ title: "behnam" }, { title: "behnam1" }, { title: "behnam2" }]
    return (
        <CardList items={pages} />
    );
};

export default Pages;