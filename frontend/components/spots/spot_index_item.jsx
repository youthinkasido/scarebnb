import React from 'react';
import { Link } from 'react-router-dom';


const SpotIndexItem = ({spot}) => (
    
    <li className="spot-index-item">
        <Link to={`/api/spots/${spot.id}`}>

            <img src={spot.image_url}/>
            <span>{spot.name}</span>
            <span>{spot.description}</span>
            {/* <span>{spot.cost_per_night}</span> */}
            <span>{spot.rating}</span>
        
        </Link>
    </li>
)

export default SpotIndexItem