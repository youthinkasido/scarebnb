import React from 'react';
import { Link } from 'react-router-dom';
// const bedCheck = ({spot})=>{
// }

// function amenityGenerator(){
//    let amenities = [
//        ' Wifi ', ' Soap ', ' Running water ', ' Couch ', ' Nearby police station ', ' Valet Parking '
//     ]

//     let spot_ams = [];
//     let i = Math.floor(Math.random() * amenities.length - 2)
   
//     while (i > 0){
//         spot_ams.push(amenities[i])
       
//         if (i > 1) {
//             spot_ams.push(' -')
//         }
//         i--
//     }
//         if (!spot_ams.length){
//             spot_ams.push('Wifi')
//         }
       
//     return spot_ams
// }



const SpotIndexItem = ({spot}) => {
   
return (
  
  
    <div className="spot-item--container">
        <div className="spot-item-cover">
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
  
    )
}

export default SpotIndexItem


