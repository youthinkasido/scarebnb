import { connect } from 'react-redux';
import { fetchAllSpots } from '../../actions/spot_actions'
import { selectAllSpots } from '../../reducers/selectors';
import SpotsIndex from './spot_index'

const mapStateToProps = (state) =>{

    return ({
 spots: selectAllSpots(state)
        // spots: state.entities.spots
})}

const mapDispatchToProps = (dispatch) => {
  
    return ({
    fetchAllSpots: () => dispatch(fetchAllSpots())
})}

export default connect(mapStateToProps,mapDispatchToProps)(SpotsIndex)