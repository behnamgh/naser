import React from 'react';
import MaterialTable, { Column } from 'material-table';
import useDatas from "./hooks/useDatas";
import Icon from '@material-ui/core/Icon';
import StopScreenShareSharpIcon from '@material-ui/icons/StopScreenShareSharp';
import PhoneIphoneSharpIcon from '@material-ui/icons/PhoneIphoneSharp';


interface Row {
  name: string;
  surname: string;
  birthYear: number;
  birthCity: number;
}

interface TableState {
  columns: Array<Column<Row>>;
  data: Row[];
}

export default function MaterialTableDemo() {
  const data = useDatas();
  const columns = React.useMemo<TableState["columns"]>(() => [
    { title: 'ID', field: 'id', filtering: false },
    { title: 'Date', field: 'createdAtDate', type: "date" },
    { title: 'time', field: 'createdAtDate', type: "time" },

    { title: 'IP', field: 'ip' },
    { title: 'Country', field: 'ipInfo.country' },
    {
      field: 'url',
      title: 'Avatar',
      filtering: false,
      render: (rowData: any) => <>
        <Icon>{rowData.ipInfo ? <StopScreenShareSharpIcon /> : <PhoneIphoneSharpIcon />}</Icon>
      </>
    },
    {
      title: 'Device',
      field: 'device',
      lookup: {
        "curl/7.64.0": 'Terminal',
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36": 'Google Chrome',
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.122 Safari/537.36": 'Google Chrome/linux',
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.122 Safari/537.36": 'Google Chrome/Mac',
        "Mozilla/5.0 (X11; Linux x86_64; rv:68.0) Gecko/20100101 Firefox/68.0": 'Mozilla firefox'
      },
    },
  ], []);

  return (<MaterialTable
    title="LOGS"
    isLoading={!data}
    columns={columns}
    data={data}
    options={{
      sorting: true,
      grouping: true,
      exportAllData: true,
      exportButton: true,
      filtering: true,
      pageSize: 10,
      pageSizeOptions: [10, 20, 50],
      showFirstLastPageButtons: false

    }}
  />
  );
}