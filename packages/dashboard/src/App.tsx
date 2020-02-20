import React from 'react';
import './App.css';
import { useAuth } from './Store/state';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"

const App = () => {
  const user = useAuth();

  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      {user.token && <Route path="/dashboard" component={Dashboard} />}
      <Route path="/login" component={Login} />
    </BrowserRouter>

  );
}

export default App;
