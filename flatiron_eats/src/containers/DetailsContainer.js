import React from 'react'

// components
import Review from '../components/Review'

const DetailsContainer = ({ restaurant, hideDetail }) => {
    return(
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col6'>
                    <div className='card'>
                        <div>
                            <button type="button" className="btn close" aria-label="Close" onClick={hideDetail} >X</button>
                            <h1 className='text-center card-title'>{restaurant.name}</h1>
                        </div>
                        <img className='card-img' src={restaurant.image} alt='restaurant image' />
                        <div className='card-body'>
                            <div>{restaurant.location}</div>
                            <div>{restaurant.website}</div>
                        </div>
                        <div className='card-header'><h3>Reviews</h3></div>
                        <ul className='list-group list-group-flush'>
                            {restaurant.reviews.map(rev => <Review key={rev.id} review={rev} />)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsContainer