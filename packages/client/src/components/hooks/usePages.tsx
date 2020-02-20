import React from "react";
import getHttpClient from "../../utils/httpClient";
// import { useSnackbar } from 'notistack';

function usePages() {
    const [data, setData] = React.useState<any>([]);
    // const { enqueueSnackbar } = useSnackbar();

    React.useEffect(() => {
        async function loadData() {
            try {
                const response: any = await new getHttpClient().get("/page");
                console.log(["responses", response]);

                if (response && response.data) {
                    setData(response.data)
                }

            } catch (error) {
                // enqueueSnackbar(error.message || error, { variant: "error" });
                console.log(error.message || error, { variant: "error" });
            }
        }
        loadData()
    }, []);

    return data;

}

export default usePages;