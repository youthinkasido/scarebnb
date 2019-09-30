import React, { Component } from 'react';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/initialize';
import moment from 'moment';
import { withRouter } from 'react-router-dom'



class FrontPageBooking extends Component {
    constructor(props) {
        super(props)

        this.state = {
            startDate: moment(event.start),
            endDate: moment(event.end),
            num_guests: null,
            spot_id: null,
            booker_id: null,
            owner_id: null,
            price_per_day: null,
            booking_image_url: null
        }
        this.sendToSearch = this.sendToSearch.bind(this)
    }

    sendToSearch(e) {

        e.preventDefault();
        this.props.history.push('/spots')

    }

    render() {
        return (
            <div>
                <div className="splash-container">
                    <div className="splash-booking">
                        <div className="splash-booking-form">
                            <h1 className="splash-booking-header">Find your next nightmare</h1>

                            <div>
                                <div className="splash-form-field">

                                    <label>WHERE</label>
                                    <input className="splash-location" />
                                </div>


                                <label>GUESTS</label>
                                <input type="number" onChange={this.update} name="" className="splash-guests" placeholder="guests" defaultValue={this.state.num_guests} />

                                <label>CHECK IN</label>
                                <div className="splash-calender">
                                    <img className="splash-calender-icon" alt="scarebnb" src={"calendar.png"} />

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
                                </div>



                                <div className="splash-booking-guests">
                                    <form onSubmit={this.sendToSearch} >
                                        <button className="splash-submit">Search</button>
                                    </form>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default withRouter(FrontPageBooking)
