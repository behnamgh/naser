import React from 'react';
import './App.css';
import { useAuth } from './Store/state';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"

const App = () => {
  const user = useAuth();

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/admin" exact component={Login} />
        {user.token && <Route path="/admin/dashboard" component={Dashboard} />}
        <Route path="/admin/login" component={Login} />
      </Switch>
    </Router>

  );
}

export default App;
