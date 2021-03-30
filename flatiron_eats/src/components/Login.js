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
    <div className='container'>
      <div className='row align-items-center justify-content-center'>
        <div className='col-4'>
          <div className='text-center'>
            <img src={logo} alt="Flatiron Eats Logo" />
          </div>
          <form onSubmit={(e) => handleSubmit(e)} >
            <div id="login" className='text-center mb-3'>
              <h3>Login Here</h3>
            </div>
            <div className='mb-3'>
              <input className='form-control' type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className='text-center mb-3'>
              <input className='form-control' type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='text-center mb-3'>
              <button className='btn btn-outline-primary' type="submit" value="Login">Login</button>
            </div>
          </form>
          <div className='text-center'>
            Not a member? <Link to='/register'>Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  )
};

  export default Login