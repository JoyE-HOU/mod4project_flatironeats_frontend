import React from 'react'

// components
import Review from '../components/Review'

const DetailsContainer = ({ restaurant, hideDetail }) => {
    return(
        <div>
            <div>
                <h1>{restaurant.name}</h1>
                <button onClick={hideDetail} >X</button>
            </div>
            <img src={restaurant.image} alt='restaurant image' />
            <div>{restaurant.location}</div>
            <div>{restaurant.website}</div>
            {restaurant.reviews.map(rev => <Review key={rev.id} review={rev} />)}
        </div>
    )
}

export default DetailsContainer