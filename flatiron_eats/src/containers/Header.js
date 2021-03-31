import React, { useEffect, useState } from 'react'

import SearchBar from '../components/SearchBar'
// import Logout from '../components/Logout'

// styling
import Logo from '../images/mod4_logo_horizontal.png'

const RestuarantURL = 'http://localhost:3000/restaurants'

const Header = () => {

    const [input, setInput] = useState("")
    const [restaurantList, setRestaurantList] = useState([])
    // const [restaurantSearch, setRestaurantSearch] = useState("")

    useEffect(async() => {
        const fetchRestuarants = await fetch(RestuarantURL)
        const restuarantsRes = await fetchRestuarants.json()
        setRestaurantList(restuarantsRes)
    }, [])

    const updateInput = async (input) => {
        const filtered = restaurantList.filter(restaurant => {
            return restaurant.location.includes(input)
            // return restaurant.location.toLowerCase().includes(input.toLowerCase())
        })
        setInput(input)
        setRestaurantList(filtered)
    }

    return(
        <header>
            <div className='container'>
                <div className='row align-items-center justify-content-around'>
                    <div className='col-6'>
                        <img src={Logo} />
                    </div>
                    <div className='col-6'>
                        <SearchBar 
                            // input={input}
                            updateInput={updateInput}  
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header