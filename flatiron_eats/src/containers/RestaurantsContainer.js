import React from 'react'

// containers

// components
import RestaurantCard from '../components/RestaurantCard'

const RestaurantsContainer = ({restaurants, likeRestaurant}) => {
    return(
        <div>
            <div className='card-columns'>
                {restaurants.map(rest => <RestaurantCard key={rest.id} restaurant={rest} liked={false} clickAction={likeRestaurant} /> )}
            </div>
        </div>
    )
}

export default RestaurantsContainer