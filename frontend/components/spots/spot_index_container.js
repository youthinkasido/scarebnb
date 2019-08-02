import { connect } from 'react-redux';
import { fetchAllSpots } from '../../actions/spots_actions'
import { selectAllSpots } from '../../reducers/selectors';

const mapStateToProps = (state) =>({
    spots: selectAllSpots(state)

})

const mapDispatchToProps = (dispatch) => ({
    fetchAllSpots = () => dispatch(fetchAllSpots())
})