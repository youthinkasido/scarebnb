import React from 'react';
import {withRouter} from 'react-router'
import {connect} from 'react-redux'
import { fetchSpot } from '../../actions/spot_actions';
import ReviewFormContainer from './review_for_container';

class SpotShow extends React.Component{
    constructor(props){
        super(props)
      
    }
    componentDidMount(){
        this.props.fetchSpot(this.props.match.params.spotId)
    }

    componentDidUpdate(prevProps){
        if (this.props.match.params.spotId !== prevProps.match.params.spotId ){
            this.props.fetchSpot(this.props.match.params.spotId)
        } 
    }

    render(){
     
        const spot = this.props.spot
     
        if (!spot){
            return null;
        }
    
        return (
            <div>

                <div className="spot-show--wrapper">
                    <div>
                        <img src={spot.image_url}/>
                    </div>

                    <div>
                        <img src={spot.image_url} />
                    </div>

                    <div>
                        <img src={spot.image_url} />
                    </div>

                    <div>
                        <img src={spot.image_url} />
                    </div>

                    <div>
                        <img src={spot.image_url} />
                    </div>
            </div>

                <section className="spot-show--details">
                    <div>Leave A Review</div>
                    <div className="spot-show-name">{spot.name}</div>
                    <div className="spot-show-city-state"> {spot.city}, {spot.state}</div>
                    <div className="spot-show-rooms">
                        <li>{spot.max_guests} guests {spot.bedrooms} beds {spot.bathrooms} bath</li>
                
                       </div>
                    <div className="spot-show-description">
                        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Quibusdam ipsa ex nihil ducimus officiis architecto saepe, 
                            dolorum optio debitis, perspiciatis rem? Ipsam animi nulla nemo 
                            repudiandae cum porro. Vero, animi!
                            
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Quibusdam ipsa ex nihil ducimus officiis architecto saepe, 
                            dolorum optio debitis, perspiciatis rem? Ipsam animi nulla nemo 
                            
                            repudiandae cum porro. Vero, animi!
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Quibusdam ipsa ex nihil ducimus officiis architecto saepe, 
                            dolorum optio debitis, perspiciatis rem? Ipsam animi nulla nemo 
                            repudiandae cum porro. Vero, animi!
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Quibusdam ipsa ex nihil ducimus officiis architecto saepe, 
                            dolorum optio debitis, perspiciatis rem? Ipsam animi nulla nemo 
                            repudiandae cum porro. Vero, animi!
                            </h1>
                    </div>
                    <div className="spot-show-ameneties"><div>Amenities:</div> 
                        <li>{spot.amenities}</li>
                    </div>

                    <div className="spot-show--reviews">
                         
                        <ReviewFormContainer/>
                        <div className="spot-show-review">
                            <h2>asdasdasdELLO</h2>
                                <p>{spot.reviews}</p>
                        </div>
                    </div>
                </section>

                <div className="spot--bookings">Bookings
                <div className="spot-booking-form-container">
                    <div className="spot-show-cost-per-night">{spot.cost_per_night}</div>
                        <h2>Dates</h2>
                        <div></div>
                        <div></div>
                            <div className="spot-show-calender"> </div></div>
                     
                </div>

                </div>
        )
    }
}
const msp = (state, ownProps) => {

    return {
        spot: state.entities.spots[ownProps.match.params.spotId]
    }
}

const mdp = dispatch => {
  
    return {fetchSpot: (id) => dispatch(fetchSpot(id))}
}

export default withRouter(connect(msp,mdp)(SpotShow))



