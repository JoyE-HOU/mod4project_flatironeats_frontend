import React, { useState } from 'react';
import { Link } from 'react-router-dom' 
import { withRouter } from 'react-router'

// styling
import logo from '../images/mod4_logo.png';

// endpoints
const SESSION_URL = 'http://localhost:3000/sessions'

function Login({ history }) {

  const [email, setEmail] = useState('')  
  const [password, setPassword] = useState('')  

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const postSes = await fetch(SESSION_URL, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user: {email, password}})
    })

    const userSes = await postSes.json()

    if (userSes.msg) {
      alert(userSes.msg)
      setEmail('')
      setPassword('')
      history.push('/')
    } else {
      localStorage.setItem('auth_key', userSes.token)
      localStorage.setItem('user_id', JSON.stringify(userSes.user.id))
      history.push('/user_page')
    }

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
            <div className='text-center mb-3'>
              <input className='form-control' type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='mb-3'>
              <input className='form-control' type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
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

  export default withRouter(Login)