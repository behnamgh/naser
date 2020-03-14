import React, { useMemo, useState } from 'react';
import useDatas from "./hooks/useDatas";

import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import CanvasJSReact from './canvasjs.react';
import { Grid } from '@material-ui/core';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const ChartComponent = () => {
    const [groupMode, setGroupMode] = useState<string | undefined>("createdAt");
    const data = useDatas(groupMode);

    const handleAlignment = (event: React.MouseEvent<HTMLElement>, newGroup: string) => {
        setGroupMode(newGroup);
    };

    const options = useMemo(
        () => ({
            theme: "light2",
            exportEnabled: true,
            title: {
                text: "Log Chart"
            },
            data: [{
                type: "column",
                markerSize: 5
            }]
        }),
        []
    );

    return (
        <Grid container
            direction="column" >
            <Grid item >
                <ToggleButtonGroup
                    value={groupMode}
                    exclusive
                    onChange={handleAlignment}
                    aria-label="text alignment"
                >
                    <ToggleButton value="ipInfo.country" aria-label="left aligned">
                        Country
                    </ToggleButton>
                    <ToggleButton value="createdAt" aria-label="centered">
                        Date
                    </ToggleButton>
                    <ToggleButton value="ip" aria-label="centered">
                        IP
                    </ToggleButton>
                    <ToggleButton value="browser" aria-label="centered">
                        Browser
                    </ToggleButton>
                    <ToggleButton value="os" aria-label="centered">
                        OS
                    </ToggleButton>
                    <ToggleButton value="city" aria-label="justified" disabled>
                        CITY
                    </ToggleButton>
                </ToggleButtonGroup>
            </Grid>
            <Grid item >
                {data && data.length && <CanvasJSChart options={{ ...options, data: [{ ...options.data[0], dataPoints: data }] }} />}
            </Grid>
        </Grid>
    )
}
export default ChartComponent;
