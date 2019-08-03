import React from 'react';
import { Link } from 'react-router-dom';


const SpotIndexItem = ({spot}) => (
    
    <li className="spot-index-item">
        <Link to={`/spots/${spot.id}`}>
            {/* <span>{spot.name}</span> */}
            <img className="spot-index-item-photo" src={spot.image_url} />
            <span className='spot-index-item-details'>{spot.description}</span>
            {/* <span>{spot.rating}</span> */}
            <span >{spot.cost_per_night}</span>
        </Link>
    </li>
)

export default SpotIndexItem