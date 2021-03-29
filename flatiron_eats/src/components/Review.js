import React from 'react'

const Review = ({review}) => {
    return(
        <div>
            <h6>{review.content}</h6>
            <h6>{review.rating}</h6>
        </div>
    )
}

export default Review