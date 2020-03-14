import React from 'react';
import MaterialTable, { Column } from 'material-table';


interface Row {
  name: string;
  surname: string;
  birthYear: number;
  birthCity: number;
}

interface TableState {
  columns: Array<Column<Row>>;
}
interface ITableProps {
  title: string;
  columns: any;
  fetchData: any;
  options: any
}
export default function MaterialTableDemo({ title, columns, fetchData, options }: ITableProps) {

  return (<MaterialTable
    title={title}
    columns={columns}
    data={fetchData}
    options={options}
  />
  );
}