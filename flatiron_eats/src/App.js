import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

// containers
import MainContainer from './containers/MainContainer'

// components
import Login from './components/Login'
import Register from './components/Register'

// styling
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

// endpoints
const URL = 'http://localhost:3000/users'

function App() {

  const [token, setToken] = useState('')

  return (
    <Switch>
        <Route exact path ='/' render={_ => <Login setToken={setToken} />} />
        <Route path ='/register' render={_ => <Register />} />
        <Route path ='/user_page' >
          { token ? <MainContainer /> : <Redirect to='/register' />} 
        </Route>
        <Route>
          <Redirect to='/' />
        </Route>
    </Switch>
  );
}

export default App;
