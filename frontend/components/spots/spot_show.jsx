import React from 'react';
import {withRouter} from 'react-router'
import {connect} from 'react-redux'
import { fetchSpot } from '../../actions/spot_actions';


class SpotShow extends React.Component{
    constructor(props){
        super(props)
    }


    componentDidMount(){
        // debugger
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
               description: {spot.description + " "}
               max guests: {spot.max_guests + " "}
                <img src={spot.image_url}/>
            </div>
        )
    }
}


const msp = (state, ownProps) => {
    // debugger
    return {
        spot: state.entities.spots[ownProps.match.params.spotId]
    }
}

const mdp = dispatch => {
    // debugger
    return {fetchSpot: (id) => dispatch(fetchSpot(id))}
}

export default withRouter(connect(msp,mdp)(SpotShow))



