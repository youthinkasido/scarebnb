import React from 'react'
import review_for_container from './review_for_container';


// function calcStars(review){ 
//     let arr =[]

//     for (let h = 0; h < review.rating; h++){
//        arr.push(<li className="review-star-star">★</li>)
//         // how do i add to its padding each time?
//     }
//     return arr
// }

  



const ReviewIndexItem = ({review}) =>{ // do we even need to destructure


// const calculateStars = (calcStars(review))
    // debugger

    const calcStars = (review) =>{
        let arr = []
        for (let h = 0; h < review.rating; h++) {

            arr.push(<li className="review-review-star">★</li>)
            // how do i add to its padding each time?
        }

        return arr

    }



    return (
       
        <div className='review-item'>

           <img src="./user.svg"></img>
           
           <div className="review-details">
                <li className="review-reviewer">{review.reviewer}</li>
         
                    <ul className="display-review-stars">
                        {calcStars(review)}
                    </ul>
                {/* <li className="review-rating">Rating {review.rating}</li> */}
                <li className="review-comment">{review.comment}</li>
            
            </div>
        </div>
    )

}

export default ReviewIndexItem