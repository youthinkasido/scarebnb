import React from 'react';
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { fetchSpot } from '../../actions/spot_actions';
import ReviewFormContainer from './review_for_container';
import ReviewIndexItem from './review_index_item';
import BookingContainer from './booking_container';




class SpotShow extends React.Component {
    constructor(props) {

        super(props)

    }
    componentDidMount() {

    
        window.scrollTo(0, 0);

        const { spotId } = this.props.match.params

        this.props.fetchSpot(spotId).then(() => this.props.fetchReviews(spotId))
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.spotId !== prevProps.match.params.spotId) {
            this.props.fetchSpot(this.props.match.params.spotId)
        }
    }


    render() {

        const calculateRating = (spot) => {
            //   debugger
            let arr = []
            for (let s = 0; s < spot.rating / 2; s++) {
                arr.push(<li className="index-review-star">★</li>)
            }
            return arr
        }
        // console.log(this.props.reviews)
        const spot = this.props.spot

        if (!spot) {
            return null;
        }

        return (
            <div>
                <div className="spot-show--wrapper">
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

                    <div>
                        <img src={spot.image_url} />
                    </div>
                </div>

                <section className="spot-show--details">

                    <div className="spot-show-name">{spot.name}</div>
                    <div className="spot-show-city-state"> {spot.city}, {spot.state}</div>
                    <div className="spot-show-rooms">
                        <li>{spot.max_guests} guests {spot.bedrooms} beds {spot.bathrooms} bath</li>

                    </div>
                    <div className="spot-show-description">
                        <h1>{spot.description}
                        </h1>
                    </div>

                    <div className="spot-show-ameneties"><div>Amenities:</div>
                        <li>{spot.amenities}</li>

                    </div>

                    <div className="spot-show--reviews">
                        <div className="spot-show-review">
                            {this.props.reviews.map(review => {

                                return <ReviewIndexItem review={review} />
                            })}

                        </div>
                        <ReviewFormContainer />
                    </div>
                </section>

                <div className="spot--bookings">

                    <div className="spot-booking-form-container">
                        <div className="spot-cost-per-night">
                            {spot.cost_per_night}
                        </div>

                        <div className="booking-rating">{calculateRating(spot)}</div>

                        <BookingContainer formData={this.props.formData} currentUser={this.props.currentUser} />

                    </div>

                    <div className="spot-show-calender"> </div></div>

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
    return { fetchSpot: (id) => dispatch(fetchSpot(id)) }
}

export default withRouter(connect(msp, mdp)(SpotShow))



