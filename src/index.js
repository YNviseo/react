import React from 'react';
import ReactDOM from 'react-dom';
import { Route,  BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Login from './components/screens/login';
import Register from './components/screens/register';
import Profile from './components/screens/profile';
import {ProtectedRoute} from './components/protectedRoute';


const routing = (
    <Router>
      <Route exact  path="/" component={App} /> 
      <ProtectedRoute exact  path="/profile" component={Profile} /> 
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
