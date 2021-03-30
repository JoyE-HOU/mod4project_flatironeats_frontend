import React, { useEffect, useState } from 'react'

import SearchBar from '../components/SearchBar'
import Logout from '../components/Logout'

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
    })

    const updateInput = async (input) => {
        const filtered = restaurantList.filter(restaurant => {
            return restaurant.location.includes(input)
            // return restaurant.location.toLowerCase().includes(input.toLowerCase())
        })
        setInput(input)
        setRestaurantList(filtered)
    }

    return(
        <div>
        <header>
            <img src={Logo} />
        </header>
            <SearchBar 
                // input={input}
                updateInput={updateInput}  
            />
            <br></br>
            <Logout />
        </div>
    )
}

export default Header