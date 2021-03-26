import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login'

const URL = 'http://localhost:3000/users'


// import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {

  const [user, setUser] = useState([])

  useEffect(async() => {
    const users = await fetch(URL)
    const usersRes = await users.json()
    setUser (usersRes)
  })

  validLogin = (user) => {
    //if both the name and email matches
    //then the login component will be hidden show the other components
    //poss. have to react routes to view other components
  }

  return (
    <div>
      <Login validLogin={validLogin()}/>
    </div>
  );
}

export default App;
