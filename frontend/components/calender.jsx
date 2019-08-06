import React, { Component } from 'react';


import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import { DateRangePicker } from 'react-dates';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: null,
            endDate: null,
            focusedInput: null,
            small: true,
            orientation: PropTypes.oneOf([HORIZONTAL_ORIENTATION, VERTICAL_ORIENTATION])
        };
    }

    render() {
        return (
            <div className="App">
                <DateRangePicker
                    startDateId="startDate"
                    endDateId="endDate"
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate }) }}
                    focusedInput={this.state.focusedInput}
                    onFocusChange={(focusedInput) => { this.setState({ focusedInput }) }}
                    small={true}
                    orientation={VERTICAL_ORIENTATION}
                />
            </div>
        );
    }
}

export default App;