import React from 'react';
import CardList from '../components/chart';
import Table from '../components/table';
import { Grid } from '@material-ui/core';
import getHttpClient from "../utils/httpClient";

const Pages = () => {
    // const pages = usePages();
    const columns = [
        { title: 'ID', field: 'id', filtering: false },
        { title: 'Date', field: 'createdAt', type: "date" },
        { title: 'time', field: 'createdAt', type: "time" },

        { title: 'IP', field: 'ip' },
        { title: 'Country', field: 'ipInfo.country' },
        {
            title: 'Browser',
            field: 'browser',

        },
    ];
    const options = {
        sorting: true,
        grouping: true,
        exportAllData: true,
        exportButton: true,
        filtering: true,
        search: false,
        columnsButton: true,
        pageSize: 20,
        pageSizeOptions: [20, 50, 100],
        showFirstLastPageButtons: false
    };
    const fetchData = (query: any) => new Promise((resolve, reject) => {
        new getHttpClient().get(`/page/readData?page=${query.page}&pageSize=${query.pageSize}`).then((result: { data: any }) => result.data).then(resolve).catch(reject);
    });
    return (
        <Grid container>
            <Grid item xs={12}>
                <CardList />
            </Grid>
            <Grid item xs={12} style={{ marginTop: '50px' }}>
                <Table title="logs" options={options} fetchData={fetchData} columns={columns} />
            </Grid>
        </Grid>
    );
};

export default Pages;