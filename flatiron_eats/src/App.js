import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

// containers
import MainContainer from './containers/MainContainer'

// components
import Login from './components/Login'
import Register from './components/Register'

// styling
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

// endpoints
const URL = 'http://localhost:3000/users'

function App() {

  const [users, setUsers] = useState([])
  const [user, setUser] = useState(null)

  useEffect(async() => {
    const fetchUsers = await fetch(URL)
    const usersRes = await fetchUsers.json()
    setUsers(usersRes)
  }, [])

  const login = async (user) => {
    const newUser = await setUser(user)
    // debugger
    // return <Redirect to={'/user_page'} />
  }

  const validateLogin = (name, email) => {
    const user = users.find(user => user.name === name && user.email===email)
    
    if (user) {
      login(user)
    } else {console.log(false)}
  }

  const registerUser = async (name, email, city) => {
    const userObj = {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        city: city
      })
    }

    const postUser = await fetch(URL, userObj)
    const userRes = await postUser.json()

    setUsers([...users, userRes])
    setUser(userRes)
    login(userRes)
  }

  return (
    <Router>
      <div>
        <Route exact path ='/' render={_ => user? 
          <Redirect to='/user_page' /> :
          <Login validateLogin={validateLogin}
        />} />
        <Route path ='/register' render={_ => user?
          <Redirect to='/user_page' /> :
          <Register registerUser={registerUser} 
          />} />
        <Route path ='/user_page' render={_ => <MainContainer user={user} />} />
      </div>
    </Router>
  );
}

export default App;
