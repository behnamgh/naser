import React from 'react';
import Table from '../components/table';
import getHttpClient from "../utils/httpClient";

const MailList = () => {
    // const pages = usePages();
    const columns = [
        { title: 'ID', field: 'id', filtering: false },
        { title: 'Date', field: 'createdAt', type: "date" },
        { title: 'time', field: 'createdAt', type: "time" },

        { title: 'subject', field: 'subject' },
        { title: 'html', field: 'html' }

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
        new getHttpClient().get(`/subscribe?page=${query.page}&pageSize=${query.pageSize}`).then((result: { data: any }) => result.data).then(resolve).catch(reject);
    });
    return (
        <div>
            <Table title="Mail" options={options} fetchData={fetchData} columns={columns} />
        </div>
    );
};

export default MailList;