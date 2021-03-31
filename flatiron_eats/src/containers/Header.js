import React, { useEffect, useState } from 'react'

import SearchBar from '../components/SearchBar'
// import Logout from '../components/Logout'

// styling
import Logo from '../images/mod4_logo_horizontal.png'

const Header = ({restaurants, updateInput}) => {

    return(
        <div>
        <header>
            <img src={Logo} />
        </header>
            <SearchBar restaurants={restaurants} updateInput={updateInput}/>
            <br></br>
            {/* <Logout /> */}
        </div>
    )
}

export default Header