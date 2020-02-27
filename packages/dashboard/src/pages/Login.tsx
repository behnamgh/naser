import React, { useState, ChangeEvent } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import getHttpClient from "../utils/httpClient"
import { useAuth } from '../Store/state';
import { useHistory } from 'react-router-dom';
import AuthHelper from "../utils/auth"


const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        // border: "1px solid black",
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "white",
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Login = () => {
    const userAuth = useAuth();
    const history = useHistory();
    const classes = useStyles();
    const [formData, setData] = useState<{ username?: string, password?: string }>({});
    const loginSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let response = await new getHttpClient().post("/user/login", formData);
        userAuth.setSignedIn(response.data);
        AuthHelper.signIn(response.data.token)
        history.push("/dashboard")

    }
    const handleTextChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setData({ ...formData, [event.target.name]: event.target.value })
    }
    return (
        <Container component="main" maxWidth="xs" >
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} noValidate onSubmit={loginSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="username"
                        value={formData.username}
                        onChange={handleTextChange}
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        value={formData.password}
                        onChange={handleTextChange}
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
          </Button>
                </form>
            </div>
        </Container>
    );
}

export default Login;