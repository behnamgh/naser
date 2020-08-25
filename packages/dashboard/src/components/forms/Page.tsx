import React, { useEffect, useState } from 'react';
import getHttpClient from "../../utils/httpClient";
import { useParams, Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
// import RemoveIcon from '@material-ui/icons/Remove';

const EditPage = ({ id }: any) => {
    const [pageData, setPageData] = useState<any>();
    const params: any = useParams();
    const langs = ["en-US", "de"]
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
        if (!pageData.contents[index].values) {
            pageData.contents[index].values = {}
        }
        pageData.contents[index].values[lang] = event.target.value;
        setPageData({ ...pageData })
    }
    const handleChange = (name: string) => (event: any) => {
        pageData[name] = event.target.value;
        setPageData({ ...pageData })
    }
    const handleRepeatableChange = (index: number, index2: number, lang: string, key = "value") => (event: any) => {
        if (!pageData.contents[index].values[lang]) pageData.contents[index].values[lang] = [];
        if (!pageData.contents[index].values[lang][index2]) pageData.contents[index].values[lang][index2] = {};
        pageData.contents[index].values[lang][index2][key] = event.target.value;
        setPageData({ ...pageData })
    }
    const addRepeatable = (index: number, lang: string) => (event: any) => {
        if (!pageData.contents[index].values[lang]) pageData.contents[index].values[lang] = [{ value: "" }];
        pageData.contents[index].values[lang].push({ value: "" });
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
                    {langs.map(lang => <Grid item xs={12} md={6} lg={6}><fieldset>
                        <legend>{lang}</legend>
                        <Grid container spacing={4}>
                            {pageData.contents.map((content: any, index: number) =>
                                <Grid item xs={12} md={12} lg={12}>
                                    {content.values && (content.unlimited ?
                                        <>
                                            {(content.values[lang] || [{ value: "" }]).map((value: any, index2: any) => <>
                                                <TextField fullWidth={!content.hasLink} value={value.value} onChange={handleRepeatableChange(index, index2, lang)} label={`${content.title}-${index2 + 1}`} variant="outlined" />
                                                {content.hasLink && <TextField value={value.link} onChange={handleRepeatableChange(index, index2, lang, "link")} label="Link" variant="outlined" />}
                                                {/* <IconButton color="secondary" aria-label="add an alarm" onClick={removeRepeatable(index, lang)}>
                                                <RemoveIcon />
                                            </IconButton> */}
                                            </>)}
                                            <IconButton color="secondary" aria-label="add an alarm" onClick={addRepeatable(index, lang)}>
                                                <AddIcon />
                                            </IconButton>
                                        </>
                                        :
                                        <TextField value={content.values[lang].value} onChange={handleContentsChange(index, lang)} label={content.title} variant="outlined" />
                                    )}
                                </Grid>)}
                        </Grid>
                    </fieldset></Grid>)}

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