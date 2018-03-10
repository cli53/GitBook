import React from 'react';
import Login from './components/Login/Login.jsx';
import App from './App/App.js'; 
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

const Routes = () => (
  <Router>
  <Switch>
    <Route path='/login' component={Login}/>
    <Route exact path='/' component={App}/>
  </Switch>
  </Router>
)
 
export default Routes;