import React from 'react';
import { Link } from 'react-router-dom';



const SpotIndexItem = ({spot}) => {
//  debugger
    const calculateRating = (spot) => {
    //   debugger
        let arr = []
        for (let s = 0; s < spot.rating/2; s++) {
            arr.push(<li className="index-review-star">★</li>)
        }
        return arr
    }

    

//  debugger
return (
    <div className="spot-item--container">
   {/* <DayPickerRangeControllerWrapper/> */}
        <Link className="spot-link" to={`/spots/${spot.id}`}><img className="photo" src={spot.image_url} width='200' height='125' /></Link>
        <div className="spot-item-details">
            <Link className="spot-link" to={`/spots/${spot.id}`}></Link>
        <li className='spot-type-bedrooms'>{spot.spot_type}</li>
        <li className='spot-name'>{spot.name}</li>
        <li className='spot-capacities'>{spot.max_guests} guests - {spot.bedrooms} beds - {spot.bathrooms}  bath</li>
        <li className='spot-amenities'>{spot.amenities} </li>
        
            <li>{calculateRating(spot)}</li>
        <li className='cost-per-night'>{spot.cost_per_night}</li>
      </div>
        {/* <img className="skull-heart"src="./skullheart.svg"/> */}
        {/* <div className="rating-stars"> */}

        </div>
    )
}

export default SpotIndexItem


