import React from 'react';
import CardList from '../components/chart';
import Table from '../components/table';
import { Grid } from '@material-ui/core';
// import usePages from "../components/hooks/usePages";

const Pages = () => {
    // const pages = usePages();

    return (
        <Grid container>
            <Grid item xs={12}>
                <CardList />
            </Grid>
            <Grid item xs={12}>
                <Table />
            </Grid>
        </Grid>
    );
};

export default Pages;