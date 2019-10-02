import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import React from 'react';
import { withRouter } from 'react-router-dom'
import Swal from 'sweetalert2'


class BookingShow extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            startDate: moment(event.start),
            endDate: moment(event.end),
            num_guests: '',
            spot_id: Object.values(this.props.spots)[0].id,
            booker_id: this.props.currentUser,
            owner_id: this.props.currentUser,
            price_per_day: this.props.pricePerDay,
            booking_image_url: this.props.bookingImage
        }

        this.update = this.update.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }
    update(e) {

        this.setState({ num_guests: parseInt(e.target.value) })
    }

    handleSubmit(e) {

        e.preventDefault()

        if (this.props.currentUser && this.state.num_guests <= this.props.booking.max_guests) {
            Swal.fire(
                'Congratulations!',
                'Your reservation has been confirmed!',
                'success'
            )

            let data = {
                start_date: new Date(this.state.startDate.toDate()),
                end_date: new Date(this.state.endDate.toDate()),
                num_guests: this.state.num_guests,
                spot_id: this.props.spotId,
                booker_id: this.props.currentUser,
                owner_id: this.props.currentUser,
                price_per_day: this.props.pricePerDay,
                booking_image_url: this.props.bookingImage
            }

            this.props.createBooking(this.props.currentUser, data)
        }

        if (!this.props.currentUser) {
            this.props.openModal('login')
        }

        if (this.props.currentUser && this.state.num_guests > this.props.booking.max_guests) {
            Swal.fire(
                'Sorry, thats too many guests!',
                `You can only bring ${this.props.booking.max_guests} other guests!`,
                'error'
            )
        }




    }

    render() {
        return (
            <div>
                <DateRangePicker
                    orientation={"vertical"}
                    startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                    startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                    endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                    onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                />

                <div className="spot-booking-guests">
                    <form onSubmit={this.handleSubmit} >
                        <input type="number" onChange={this.update} name="" className="spot-booking-guests" placeholder="guests" value={this.state.num_guests} />
                        <button className="spot-submit">Reserve</button>
                    </form>
                </div>
            </div>
        )
    }
}



export default withRouter(BookingShow)