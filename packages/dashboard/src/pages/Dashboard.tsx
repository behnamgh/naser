import React from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Grid, Hidden } from '@material-ui/core';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Pages from './Pages';
import Add from './Add';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        pagerRoot: {
            width: 230,
        },
        paper: {
            width: 230,
            marginRight: theme.spacing(2),
        },
    }),
);

export default function Dashboard() {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        Photos
          </Typography>
                </Toolbar>
            </AppBar>
            <Grid container>
                <Hidden smDown>
                    <Grid item sm={2}>
                        <Paper className={classes.paper}>
                            <MenuList>
                                <MenuItem><Link to='/dashboard'>Home</Link></MenuItem>
                                <MenuItem><Link to='/dashboard/add'>account</Link></MenuItem>
                            </MenuList>
                        </Paper>
                    </Grid>
                </Hidden>
                <Grid item sm={10}>
                    <Router>
                        <Route path="/dashboard" exact component={Pages} />
                        <Route path="/dashboard/add" component={Add} />
                    </Router>
                </Grid>
            </Grid>
        </div>
    );
}