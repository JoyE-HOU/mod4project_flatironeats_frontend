import React from 'react'

// containers

//components
import Review from './Review'

const RestaurantCard = ({restaurant, clickAction}) => {
    
    return(
        <div>
            <h1>{restaurant.name}</h1>
            <button onClick={clickAction} >Favorite</button>
            <h3>{restaurant.location}</h3>
            <h3>{restaurant.website}</h3>
            <ul>
                {restaurant.reviews.map(review => <Review key={review.id} review={review} /> )}
            </ul>
        </div>
    )
}

export default RestaurantCard