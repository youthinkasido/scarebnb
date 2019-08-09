import { connect } from 'react-redux';

import { logout, fetchBookings } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import Greeting from './greeting';

const mapStateToProps = ( state ) => {
 
    return {currentUser: state.entities.users[state.session.currentUser]}
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    fetchBookings: (userId) => dispatch(fetchBookings(userId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Greeting);
