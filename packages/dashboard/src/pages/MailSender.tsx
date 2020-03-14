import React, { useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { stateToHTML } from 'draft-js-export-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Grid, TextField, Button } from '@material-ui/core';
import getHttpClient from "../utils/httpClient"

const MailSender = () => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [subject, updateSubject] = useState("");
    const HandleMailSend = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const body = {
            subject,
            html: stateToHTML(editorState.getCurrentContent())
        }
        let response = await new getHttpClient().post("/subscribe", body);
        console.log(response);
        
    }
    const handleSubjectChange = (event: any) => {
        updateSubject(event.target.value)
    }
    const onEditorStateChange = (editorState: any) => {
        setEditorState(
            editorState,
        );
    };

    return (
        <div className="pt-20">
            <Grid container>
                <Grid item xs={12}>
                    <TextField value={subject} onChange={handleSubjectChange} className="bg-white" id="subject" label="subject" variant="outlined" fullWidth={true} />
                </Grid>
                <Grid item xs={12}>
                    <Editor
                        editorState={editorState}
                        wrapperClassName="wysiwyg-wrapper bg-white"
                        toolbarClassName="wysiwyg-toolbar"
                        editorClassName="wysiwyg-editor"
                        onEditorStateChange={onEditorStateChange}
                    />

                </Grid>
                <Grid item xs={12} className="pt-20">
                    <Button variant="contained" color="primary" onClick={HandleMailSend} >Send</Button>
                </Grid>
            </Grid>
            {/* {editorState.getCurrentContent() && <textarea
                disabled
                value={}
            />} */}
        </div>
    );
};

export default MailSender;