import React from 'react'

const Review = ({review}) => {
    return(
        <li className='list-group-item'>
            <h6>Review: {review.content}</h6>
            <h6>Rating: {review.rating}</h6>
        </li>
    )
}

export default Review