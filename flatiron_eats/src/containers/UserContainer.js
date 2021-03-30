import React from 'react'

// containers
import FavoriteRestaurants from './FavoriteRestaurants'

// components
import UserDetails from '../components/UserDetails'

const UserContainer = ({restaurants, user, unlikeRestaurant, showDetail}) => {
    return(
        <div>
            <UserDetails user={user}/>
            <FavoriteRestaurants restaurants={restaurants} unlikeRestaurant={unlikeRestaurant} showDetail={showDetail} />
        </div>
    )
}

export default UserContainer