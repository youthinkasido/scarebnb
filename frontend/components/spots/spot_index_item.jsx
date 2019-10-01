import React from 'react';
import { Link } from 'react-router-dom';



const SpotIndexItem = ({ spot }) => {
    const calculateRating = (spot) => {

        let arr = []
        for (let s = 0; s < spot.rating / 2; s++) {
            arr.push(<li key={s} className="index-review-star">★</li>)
        }
        return arr
    }




    return (

        <Link to={`/spots/${spot.id}`} className="spot-item--container">
            <div className="spot-link"><img className="photo" src={spot.image_url} width='200' height='125' /></div>
            <div className="spot-item-details">

                <li className='spot-type-bedrooms'>{spot.spot_type}</li>
                <li className='spot-name'>{spot.name}</li>
                <li className='spot-capacities'>{spot.max_guests} guests - {spot.bedrooms} beds - {spot.bathrooms}  bath</li>
                <li className='spot-amenities'>{spot.amenities} </li>

                <li>{calculateRating(spot)}</li>
                <li className='cost-per-night'>{spot.cost_per_night}</li>
            </div>
        </Link>



    )
}

export default SpotIndexItem


