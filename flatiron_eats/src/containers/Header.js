import React, { useEffect, useState } from 'react'

import SearchBar from '../components/SearchBar'
// import Logout from '../components/Logout'

// styling
import Logo from '../images/mod4_logo_horizontal.png'

const Header = ({restaurants}) => {

    const updateInput = async (input) => {
        const filtered = restaurants.filter(restaurant => {
            return restaurant.location == input
        })
        console.log(filtered)
    }

    return(
        <div>
        <header>
            <img src={Logo} />
        </header>
            <SearchBar updateInput={updateInput}/>
            <br></br>
            {/* <Logout /> */}
        </div>
    )
}

export default Header