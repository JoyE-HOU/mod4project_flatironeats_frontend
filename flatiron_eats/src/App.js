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

  const [user, setUser] = useState(null)

  useEffect(() => {
      if (localStorage.getItem('user_id')) {
        fetch(URL+'/'+JSON.parse(localStorage.getItem('user_id')))
          .then(res => res.json())
          .then(user => setUser(user))
      }

      console.log(user)
    }, [user, setUser]
  )

  return (
    <Switch>
        <Route exact path ='/' render={_ => <Login />} />
        <Route path ='/register' render={_ => <Register />} />
        <Route path ='/user_page' >
          { localStorage.getItem('auth_key') ? <MainContainer user={user} /> : <Redirect to='/' />} 
        </Route>
        <Route>
          <Redirect to='/' />
        </Route>
    </Switch>
  );
}

export default App;
