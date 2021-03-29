import React, { useEffect, useState } from 'react'

// containers
import Header from './Header'
import UserContainer from './UserContainer'
import RestaurantsContainer from './RestaurantsContainer'

// endpoints
const RES_URL = 'http://localhost:3000/restaurants'

const MainContainer = () => {

    const [restaurants, setRestaurants] = useState([])
    const [favRestaurants, setFavrestaurants] = useState([])

    useEffect(async() => {
        
        const fetchRes = await fetch(RES_URL)
        const restRes = await fetchRes.json()
        
        const restState =await setRestaurants(restRes)
    }, [setRestaurants])

    const likeRestaurant = () => {
        console.log('liking')
    }

    const unlikeRestaurant = () => {
        console.log('unliking')
    }

    return(
        <div>
            <Header />
            <UserContainer restaurants={restaurants} unlikeRestaurant={() => unlikeRestaurant()} />   
            <RestaurantsContainer restaurants={restaurants} likeRestaurant={() => likeRestaurant()} />
        </div>
    )
}

export default MainContainer