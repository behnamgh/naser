import React, { useEffect, useState } from 'react';
import getHttpClient from "../../utils/httpClient";
import { useParams, Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import AlarmIcon from '@material-ui/icons/Add';

const EditPage = ({ id }: any) => {
    const [pageData, setPageData] = useState<any>();
    const params: any = useParams();

    useEffect(() => {
        const loadPage = async () => {
            const response: any = await new getHttpClient().get(`/page/${params.id}`);
            setPageData(response.data)
        }
        loadPage()
    }, [params.id]);
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const response: any = await new getHttpClient().put(`/page`, { id: params.id, newPage: pageData });
        console.log(["reposne", response]);

    }
    const handleContentsChange = (index: number, lang: string) => (event: any) => {
        pageData.contents[index].values[lang] = event.target.value;
        setPageData({ ...pageData })
    }
    const handleChange = (name: string) => (event: any) => {
        pageData[name] = event.target.value;
        setPageData({ ...pageData })
    }
    const handleRepeatableChange = (index: number, index2: number, lang: string) => (event: any) => {
        if (!pageData.contents[index].values[lang]) pageData.contents[index].values[lang] = [];
        pageData.contents[index].values[lang][index2] = event.target.value;
        setPageData({ ...pageData })
    }
    const addRepeatable = (index: number, lang: string) => (event: any) => {
        if (!pageData.contents[index].values[lang]) pageData.contents[index].values[lang] = [""];
        pageData.contents[index].values[lang].push("");
        setPageData({ ...pageData })
    }
    return (
        <>
            {pageData && <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        {pageData && pageData.title}
                    </Grid>
                    <Grid item xs={12}>
                        <TextField value={pageData.title} onChange={handleChange("title")} label="Title" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField value={pageData.titleImage} onChange={handleChange("titleImage")} label="titleImage" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField value={pageData.menuImage} onChange={handleChange("menuImage")} label="menuImage" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField value={pageData.order} onChange={handleChange("order")} label="Order" variant="outlined" />
                    </Grid>
                    {pageData.contents.map((content: any, index: number) =>
                        <Grid item xs={12} md={4} lg={3}>
                            {content.unlimited ?
                                <>
                                    {(content.values.en || [""]).map((value: any, index2: any) => <TextField value={value} onChange={handleRepeatableChange(index, index2, "en")} label={content.title} variant="outlined" />)}
                                    <IconButton color="secondary" aria-label="add an alarm" onClick={addRepeatable(index, "en")}>
                                        <AlarmIcon />
                                    </IconButton>
                                </>
                                :
                                <TextField value={content.values?.en} onChange={handleContentsChange(index, "en")} label={content.title} variant="outlined" />
                            }
                        </Grid>)}
                    <Grid item xs={12}>
                        <Button type="submit">Save</Button>
                        <Link to="/admin/dashboard"><Button type="submit">back</Button></Link>
                    </Grid>
                </Grid>
            </form>}
        </>
    );
};

export default EditPage;