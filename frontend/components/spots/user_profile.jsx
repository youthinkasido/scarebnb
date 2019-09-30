import React from 'react';
import { withRouter } from 'react-router-dom';
import Swal from 'sweetalert2';

class UserProfile extends React.Component {
    constructor(props) {

        super(props)
        this.cancelBooking = this.cancelBooking.bind(this)
        this.requestFumigation = this.requestFumigation.bind(this)
        this.state = {
            cancelBooking: false
        }

    }

    componentDidMount() {
        this.props.fetchBookings(this.props.currentUser)
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.props.fetchBookings(this.props.currentUser)
        }
    }

    cancelBooking(booking, e) {

        this.props.cancelBooking(booking)
        Swal.fire(
            'Booking Cancelled',
            'Your booking has been cancelled :(',
            'success'
        )

        setTimeout(function () { window.location.reload() }, 1000)




    }

    requestFumigation() {
        return e => {
            e.preventDefault()
            alert('fumigation allowed')
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
                                <p className="booking-header">Disgusting Broken Down Shack</p>
                                <p>{booking.start_date.slice(0, 10)} to {booking.end_date.slice(0, 10)}</p>
                                <p> {booking.num_guests} guests</p>
                                <p>{booking.price_per_day}</p>
                                <input className="cancel-button" type="submit" onClick={(e) => this.cancelBooking(booking, e)} name="Cancel" value="Cancel Booking" />
                                <input className="cancel-button" type="submit" onClick={this.requestFumigation(booking)} name="Cancel" value="Request Fumigation" />

                            </div>)}
                    </div>
                </div>
            )
        }
    }
}

export default withRouter(UserProfile)