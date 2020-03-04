import React from "react";
import getHttpClient from "../../utils/httpClient";

function usePages(page: string) {
    const [data, setData] = React.useState<any>([]);
    React.useEffect(() => {
        async function loadData() {
            try {
                const response: any = await new getHttpClient().get(`/page?page=${page}`);
                console.log(["responses", response]);

                if (response && response.data) {
                    setData(response.data)
                }

            } catch (error) {
                console.log(error.message || error, { variant: "error" });
            }
        }
        loadData()
    }, [page]);

    return data;

}

export default usePages;
