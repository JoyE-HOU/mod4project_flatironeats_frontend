import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router'

// components
import SearchBar from '../components/SearchBar'

// styling
import Logo from '../images/mod4_logo_horizontal.png'

const Header = ({history, restaurants, updateInput}) => {

    const logout = () => {
        localStorage.removeItem('auth_key')
        localStorage.removeItem('user')
        history.push('/')
    }

    return(
        <header>
            <div className='container'>
                <div className='row align-items-center justify-content-center'>
                    <div className='col-4'>
                        <img src={Logo} />
                    </div>
                </div>
                <div className='row align-items-center justify-content-center'>
                    <div className='col text-center'>
                        <SearchBar 
                            restaurants={restaurants}
                            updateInput={updateInput}  
                        />
                    </div>
                    <div className='col text-right'>
                        <button onClick={() => logout()}>Logout</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default withRouter(Header)