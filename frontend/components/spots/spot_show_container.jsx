import {connect} from 'react-redux'

//calls function from selector and passes props to component
// need to get back review ids here and give it to spot_show component's slice of state
export const msp = (state) => {
    return({
        reviewIds: 
    })
}



export default connect(msp,mdp)(SpotShow)