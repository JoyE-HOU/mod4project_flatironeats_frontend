import React, { useState } from 'react';

// styling
import logo from '../images/mod4_logo.png';

function Login({registerUser}) {

  const [name, setName] = useState('')  
  const [email, setEmail] = useState('')  
  const [city, setCity] = useState('')  

  const handleSubmit = (e) => {
    e.preventDefault()

    registerUser(name, email, city)
  }

  return (
    <div>
      <img src={logo} alt="Flatiron Eats Logo" />
      <form onSubmit={(e) => handleSubmit(e)} >
        <div id="login">
          <h3>Register Here</h3>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="email">City</label>
          <input type="city" name="city" placeholder="city" value={city} onChange={(e) => setCity(e.target.value)} />
        </div>
        <input type="submit" value="Register" />
      </form>
    </div>
  )
};

  export default Login