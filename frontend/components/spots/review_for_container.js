import {connect} from 'react-redux'

import { createReview } from '../../actions/spot_actions.js';
import ReviewForm from './review_form';


// passing a function into the review form component through props which 
// dispatches an action that contains data retrieved from the ajax request,
// which is then passed to store to update the state of the app and the review_form component.
const mdp = (dispatch) => {

return{
    createReview: (review) => dispatch(createReview(review))
    
    }
}
export default connect(null, mdp)(ReviewForm)