import React, { useState } from 'react';

// styling
import logo from '../images/mod4_logo.png';

function Login({registerUser}) {

  const [name, setName] = useState('')  
  const [email, setEmail] = useState('')  
  const [city, setCity] = useState('')  
  const [password, setPassword] = useState('')  

  const handleSubmit = (e) => {
    e.preventDefault()

    registerUser(name, email, city, password)
  }

  return (
    <div className='container'>
      <div className='row align-items-center justify-content-center'>
        <div className='col-4'>
          <div className='text-center'>
            <img src={logo} alt="Flatiron Eats Logo" />
          </div>
          <form onSubmit={(e) => handleSubmit(e)} >
            <div id="login" className='text-center mb-3'>
              <h3>Register Here</h3>
            </div>
            <div className='text-center mb-3'>
              <input className='form-control' type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className='text-center mb-3'>
              <input className='form-control' type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='text-center mb-3'>
              <input className='form-control' type="city" name="city" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
            </div >
            <div className='text-center mb-3'>
              <input className='form-control' type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className='text-center mb-3'>
              <button className='btn btn-outline-primary' type="submit" value="Register">Sign Up</button>
            </div>
          </form>     
        </div>
      </div>
    </div>
  )
};

  export default Login