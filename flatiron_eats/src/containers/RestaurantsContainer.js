import React from 'react'

// containers

// components
import RestaurantCard from '../components/RestaurantCard'

const RestaurantsContainer = ({restaurants, likeRestaurant}) => {
    return(
        <div>
            <div>
                {restaurants.map(rest => <RestaurantCard key={rest.id} restaurant={rest} clickAction={likeRestaurant} /> )}
            </div>
        </div>
    )
}

export default RestaurantsContainer