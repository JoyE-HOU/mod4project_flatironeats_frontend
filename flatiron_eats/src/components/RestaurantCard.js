import React from 'react'

// containers

//components
import Review from './Review'

const RestaurantCard = ({restaurant, clickAction}) => {
    
    return(
        <div className='card'>
            <div className='card-header'><strong>{restaurant.name}</strong></div>
            <div className='card-body'>
                <div className='card-text'>City: {restaurant.location}</div>
                <div className='card-text'>Webiste: {restaurant.website}</div>
             <button onClick={() => clickAction(restaurant.id)} >Favorite</button>
            </div>
        </div>
    )
}

export default RestaurantCard