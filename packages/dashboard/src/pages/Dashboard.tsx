import React, { useState, useMemo } from 'react';
// import MenuList from '@material-ui/core/MenuList';
// import MenuItem from '@material-ui/core/MenuItem';
// import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Grid, Container, } from '@material-ui/core';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import Home from './Home';
import Add from './Add';
import MailSender from './MailSender';
import SubscribeList from './SubscribeList';
import EditPage from '../components/forms/Page';

import Drawer from '@material-ui/core/Drawer';
// import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import usePages from '../components/hooks/usePages';
import { IPage } from '../types/types';
import MailList from './MailList';

export default function Dashboard() {
  const pages = usePages();

  const mainItems = useMemo(() => [
    { title: "Home", icon: InboxIcon, url: "" },
    { title: "SubscribeList", icon: MailIcon, url: "subscribers" },
    { title: "Send Mail", icon: MailIcon, url: "mailer" },
    { title: "Mail List", icon: MailIcon, url: "mailList" }], []);

  const [side, setSide] = useState(false);
  
  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setSide(open)
  };
  const sideList = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {mainItems.map((item: any, index: number) => (
          <ListItem button key={index}>
            <ListItemIcon><item.icon /></ListItemIcon>
            <Link to={`/admin/dashboard/${item.url}`}>
              <ListItemText primary={item.title} />
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem>
          <ListItemText primary="Pages" />
        </ListItem>
        {pages.map((text: IPage, index: number) => (
          <ListItem button key={text.id}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <Link to={`/admin/dashboard/edit/${text.id}`}>
              <ListItemText primary={text.title} />
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Container maxWidth="lg">
      <Router>
        <Drawer open={side} onClose={toggleDrawer(false)}>
          {sideList()}
        </Drawer>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon onClick={toggleDrawer(true)} />
            </IconButton>
            <Typography variant="h6" color="inherit">
              Admin Dashboard
          </Typography>
          </Toolbar>
        </AppBar>
        <Grid container >
          <Grid item sm={10}>

          </Grid>
        </Grid>
        <Route path="/admin/dashboard" title="Dashboard" exact component={Home} />
        <Route path="/admin/dashboard/subscribers" title="Subscribe List" exact component={SubscribeList} />
        <Route path="/admin/dashboard/mailer" title="Mail Sender" exact component={MailSender} />
        <Route path="/admin/dashboard/mailList" title="Mail Sender" exact component={MailList} />
        <Route path="/admin/dashboard/add" title="Add New Page" exact component={Add} />
        <Route path="/admin/dashboard/edit/:id" title="Edit Page" exact component={EditPage} />
      </Router>
    </Container>
  );
}