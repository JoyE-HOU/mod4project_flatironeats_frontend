import React from 'react'

// containers

// components
import RestaurantCard from '../components/RestaurantCard'

const FavoriteRestaurants = ({restaurants, unlikeRestaurant, showDetail}) => {
    return(
        <div>
            <h1>Favorite Restaurants</h1>
            {restaurants.map(rest => <RestaurantCard key={rest.id} restaurant={rest} liked={true} showDetail={showDetail} clickAction={unlikeRestaurant} /> )}
        </div>
    )
}

export default FavoriteRestaurants