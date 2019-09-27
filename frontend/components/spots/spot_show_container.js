import {connect} from 'react-redux'
import { fetchSpot, fetchReviews, createReview } from '../../actions/spot_actions';
import SpotShow from './spot_show';
// import { createReview } from '../../util/spots_api_util'; ?????
import { selectReviewsForSpot } from '../../reducers/selectors';
import BookingContainer from './booking_container';


//calls function from selector and passes props to component
// need to get back review ids here and give it to spot_show component's slice of state

//what do we want to give our show container? 
// why, a spot of course!
export const msp = (state) => {

    return({
    reviews: Object.values(state.entities.reviews),
    
    
    })
}
//mdp key, when called in component, makes ajax request then dispatches return data to spots reducer to update the store
export const mdp = dispatch =>({
    fetchSpot: (id) => dispatch(fetchSpot(id)),
    fetchReviews: (id) => dispatch(fetchReviews(id)),
    createReview: (id) => dispatch(createReview(id)),
  
})

export default connect(msp, mdp)(SpotShow)
