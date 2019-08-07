import React from 'react'
import review_for_container from './review_for_container';



const ReviewIndexItem = ({review}) =>{

    return (
        <div className='review-item'>
            {/* <li>{review.reviewer.first_name}</li> */}
           <img src="./user.svg"></img>
           
           <div className="review-details">
                <li className="review-reviewer">{review.reviewer}</li>
                <li className="review-rating">Rating {review.rating}</li>
                <li className="review-comment">{review.comment}</li>
            
            </div>
        </div>
    )

}

export default ReviewIndexItem