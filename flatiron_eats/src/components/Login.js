import React, { useState } from 'react';
import { Link } from 'react-router-dom' 

// styling
import logo from '../images/mod4_logo.png';

function Login({validateLogin}) {

  const [name, setName] = useState('')  
  const [email, setEmail] = useState('')  

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log('hello')
    validateLogin(name, email)
  }

  return (
    <div>
      <img src={logo} alt="Flatiron Eats Logo" />
      <form onSubmit={(e) => handleSubmit(e)} >
        <div id="login">
          <h3>Login Here</h3>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <input type="submit" value="Login" />
      </form>
      Not a member? <Link to='/register'>Sign Up</Link>
    </div>
  )
};

  export default Login