import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import React from 'react';

class BookingContainer extends React.Component{
    constructor(props){
        super(props)
   

    this.state = {
        startDate: moment(),
        focusedInput: null,
        endDate: moment()

        }
    }

    render (){

    return( 
        
        <section>
            
      
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
            {/* <TestInput placeholder="Input 1" /> */}
            </section>

       
        
        )
    }
}

export default BookingContainer