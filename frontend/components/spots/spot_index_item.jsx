import React from 'react';
import { Link } from 'react-router-dom';

// const bedCheck = ({spot})=>{

   
// }

const SpotIndexItem = ({spot}) => {

//      if (spot.bedrooms === 1) {
//      let bedAmount = 'bed'
// } else {
//      let bedAmount = 'beds'
// }
    // spot = name, description, max_guests, room_type, bedrooms, bathrooms, rating, cost_per_night
return (
    
    <div>
        
        <img className="photo" src={spot.image_url} width='200' height='125'/>
        <div className='spot-type-bedrooms'>{spot.spot_type}</div>
        <div className='spot-capacities'>{spot.max_guests} guests - {spot.bedrooms} beds - {spot.bathrooms}  bath</div>
        <div className='spot-name'>{spot.name}</div>
        <div className='cost-per-night'>{spot.cost_per_night}</div>
        <Link to={`/spots/${spot.id}`}></Link>
        <div className="rating">
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
           
        </div>

        
        
    </div>

)
}

export default SpotIndexItem