import React, { useMemo, useState } from 'react';
import { Chart } from 'react-charts';
import useDatas from "./hooks/useDatas";

const ChartComponent = () => {
    const [mode] = useState("createdAt.date")

    const axes = useMemo(
        () => [
            { primary: true, type: "ordinal", position: 'bottom' },
            { type: 'linear', position: 'left' }
        ],
        []
    );
    const data = useDatas(mode);
    console.log(["data", data]);

    return (
        <div
            style={{
                width: '100%',
                height: '400px',
            }}
        >
            {data && <Chart data={data} axes={axes} series={{ type: "bar" }} />}
        </div>
    )
}
export default ChartComponent;
