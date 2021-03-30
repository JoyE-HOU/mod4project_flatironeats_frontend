import React from 'react'

// containers

// components
import RestaurantCard from '../components/RestaurantCard'

const RestaurantsContainer = ({restaurants, likeRestaurant, showDetail}) => {
    return(
        <div>
            <div className='card-columns'>
                {restaurants.map(rest => <RestaurantCard key={rest.id} restaurant={rest} liked={false} clickAction={likeRestaurant} showDetail={showDetail} /> )}
            </div>
        </div>
    )
}

export default RestaurantsContainer