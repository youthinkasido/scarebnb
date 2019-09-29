import { connect } from 'react-redux';
import { updateFilter } from '../../actions/filter_actions';
import { asArray } from '../../reducers/selectors';
import Search from './search';
import { searchSpot } from '../../actions/spot_actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    searchSpot: (city) => dispatch(searchSpot(city))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);
