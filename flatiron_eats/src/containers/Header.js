import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router'

// components
import SearchBar from '../components/SearchBar'

// styling
import Logo from '../images/mod4_logo_horizontal.png'

const RestuarantURL = 'http://localhost:3000/restaurants'

const Header = ({history}) => {

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
                    <div className='col-4 text-center'>
                        <SearchBar 
                            // input={input}
                            updateInput={updateInput}  
                        />
                    </div>
                    <div className='col-4 text-right'>
                        <button onClick={() => logout()}>Logout</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default withRouter(Header)