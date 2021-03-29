import React from 'react'

// containers
import FavoriteRestaurants from './FavoriteRestaurants'

// components
import UserDetails from '../components/UserDetails'

const UserContainer = ({restaurants, unlikeRestaurant}) => {
    return(
        <div>
            <h1>User Container</h1>
            <UserDetails />
            <FavoriteRestaurants restaurants={restaurants} unlikeRestaurant={unlikeRestaurant} />
        </div>
    )
}

export default UserContainer