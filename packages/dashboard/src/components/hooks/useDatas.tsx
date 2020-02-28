import React, { useMemo } from "react";
import getHttpClient from "../../utils/httpClient";
// import { useSnackbar } from 'notistack';

function useDatas(group?: string) {
    const [datas, setData] = React.useState<any>();
    const now = useMemo(() => new Date(), [])

    React.useEffect(() => {
        async function loadData() {
            try {
                const response: any = await new getHttpClient().get(`/page/readData${group ? `?mode=${group}` : ""}`);
                if (response && response.data) {
                    if (!group) {
                        return setData(response.data)
                    }
                    let mappedData = response.data.reduce((acc: any, item: any) => {
                        acc[item._id || "unkown"] = item.count;
                        return acc;
                    }, {} as any);

                    let newData = group?.includes("createdAt") ? new Array(30).fill("").map((data: any, index: any) => {
                        return [now.getDate() - index, mappedData[`${now.getFullYear()}/${now.getMonth()}/${now.getDate() - index}`] || 0]
                        // return [`${now.getFullYear()}/${now.getMonth()}/${now.getDate() - index}`, mappedData[`${now.getFullYear()}/${now.getMonth()}/${now.getDate() - index}`] || 0]
                    }) : response.data.map((item: any) => [item._id || "unknown", item.count]);

                    setData([{
                        label: 'Series 1',
                        data: newData.reverse()
                    }])
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
