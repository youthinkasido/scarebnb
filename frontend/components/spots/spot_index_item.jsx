import React from 'react';
import { Link } from 'react-router-dom';


const SpotIndexItem = ({spot}) => (
    <li className="spot-index-item">
        <Link to={`/api/spots/${spot.id}`}>
            <img src={spot.image_url} alt={spot.name} />
        <span>{spot.name}</span>
        
        </Link>
    </li>
)