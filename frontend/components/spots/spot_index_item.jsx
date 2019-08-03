import React from 'react';
import { Link } from 'react-router-dom';


const SpotIndexItem = ({spot}) => (
    <div className="responsive">
    <li className="spot-index-item ">
        <Link to={`/spots/${spot.id}`}>
            
                <span><img className="spot-index-item-photo" src={spot.image_url} /></span>
            <span className='spot-index-item-details'>{spot.description}</span>
            <span >{spot.cost_per_night}</span>
        </Link>
    </li>
    </div>
)

export default SpotIndexItem