import React from 'react';
import { Link } from 'react-router-dom';


const SpotIndexItem = ({spot}) => {
 

return (
 
    <div className="spot-item--container">
   {/* <DayPickerRangeControllerWrapper/> */}
        <div className="spot-item-cover">
            <div className="spot-all-items">
        <Link className="spot-link" to={`/spots/${spot.id}`}><img className="photo" src={spot.image_url} width='200' height='125' /></Link>
        <div className='spot-type-bedrooms'>{spot.spot_type}</div>
        <div className='spot-capacities'>{spot.max_guests} guests - {spot.bedrooms} beds - {spot.bathrooms}  bath</div>
        <div className='spot-amenities'>{spot.amenities} </div>
        <div className='spot-name'>{spot.name}</div>
        <div className='cost-per-night'>{spot.cost_per_night}</div>
      
        <img className="skull-heart"src="./skullheart.svg"/>
        <div className="rating">
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star"></span>
        
        <span className="fa fa-star"></span>
                </div>
        </div>
        </div>
    </div>   
  
    )
}

export default SpotIndexItem


