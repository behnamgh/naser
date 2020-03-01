import React from "react";
import getHttpClient from "../../utils/httpClient";
// import { useSnackbar } from 'notistack';

function useDatas(group?: string) {
    const [datas, setData] = React.useState<any>();
    // const now = useMemo(() => new Date(), [])

    React.useEffect(() => {
        async function loadData() {
            try {
                const response: any = await new getHttpClient().get(`/page/readData${group ? `?mode=${group}` : ""}`);
                if (response && response.data) {
                    let dataPoints: any = [];
                    if (group && group.includes("createdAt")) {
                        dataPoints = response.data.map((i: any) => ({ x: new Date(i._id), y: i.count }))
                    } else {
                        dataPoints = response.data.map((i: any) => ({ label: i._id, y: i.count }))
                    }
                    setData(dataPoints)
                }
            } catch (error) {
                // enqueueSnackbar(error.message || error, { variant: "error" });
                console.log(error.message || error, { variant: "error" });
            }
        }
        loadData()
    }, [group]);

    return datas;

}

export default useDatas;
