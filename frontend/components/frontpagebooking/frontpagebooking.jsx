import React, { Component } from 'react';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/initialize';
import moment from 'moment';

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
    }

    render() {
        return (
            <div></div>
            // <div>
            //     <div className="splash-container">
            //         <div className="splash-booking">
            //             <form className="splash-booking-form">
            //                 <h1 className="splash-booking-header">Find your next nightmare</h1>
            //                 <div>

            //                     <label>WHERE</label>
            //                     <input className="splash-location" />
            //                     <DateRangePicker
            //                         orientation={"vertical"}
            //                         startDate={this.state.startDate} // momentPropTypes.momentObj or null,
            //                         startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
            //                         endDate={this.state.endDate} // momentPropTypes.momentObj or null,
            //                         endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
            //                         onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
            //                         focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            //                         onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
            //                     />

            //                     <div className="spot-booking-guests">
            //                         <form onSubmit={this.handleSubmit} >
            //                             <input type="number" onChange={this.update} name="" className="splash-guests" placeholder="guests" value={this.state.num_guests} />
            //                             <button className="spot-submit">Reserve</button>
            //                         </form>


            //                     </div>
            //                 </div>

            //             </form>
            //         </div>
            //     </div>
            // </div>
        )
    }
}

export default FrontPageBooking
