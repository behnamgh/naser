import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./pages/Home"

const App = () => {

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="*" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
