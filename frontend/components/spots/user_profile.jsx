import React from 'react';
import { withRouter } from 'react-router-dom';

class UserProfile extends React.Component {
    constructor(props) {
        super(props)
        this.cancelBooking = this.cancelBooking.bind(this)
    }

    componentDidMount() {
        this.props.fetchBookings(this.props.currentUser)
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.props.fetchBookings(this.props.currentUser)
        }
    }

    cancelBooking(booking) {
        return e => {
            e.preventDefault()
            this.props.cancelBooking(booking)
        }
    }
    render() {

        console.log(this.props.currentUser)
        if (!this.props.currentUser || !this.props.bookings.length > 0) {
            return null
        } else {
            let finalBookings = this.props.bookings.filter(booking => booking.booker_id === this.props.currentUser.id)
            return (
                <div className="booking-index-container">
                    <h1 className="booking-header">Your next doomed destination..</h1>
                    <div className="booking-item-container">
                        {finalBookings.map(booking =>
                            <div className="booking-item">
                                <img src={booking.booking_image_url}></img>
                                {booking.start_date} to {booking.end_date}
                                Cost Per Night:{booking.price_per_day}
                                <input className="cancel-button" type="submit" onClick={this.cancelBooking(booking)} name="Cancel" value="Cancel Booking" />
                            </div>)}
                    </div>
                </div>
            )
        }
    }
}

export default withRouter(UserProfile)