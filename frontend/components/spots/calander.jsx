


import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Icon from './icon';
import { Form, Input, FormGroup, Container, Label } from 'reactstrap';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker } from 'react-dates';


class ReactCal extends React.Component{
    constructor(props){
        super(props)
  
        this.state ={
            date: null,
            focused: null
        }
    }
    
    render(){ 
        return(

    <div>
        <Container>
            <Form>
                <FormGroup>
                    <Label for="firstname">Name: </Label>
                    <Input type="text" name="firstname" />
                </FormGroup>
                <FormGroup>
                    <Label for="lastname">Last Name: </Label>
                    <Input type="text" name="lastname" />
                </FormGroup>
                <FormGroup>
                    <SingleDatePicker
                        // showClearDate={true}
                        customInputIcon={
                            <svg className="icon icon-small">
                                <Icon
                                    icon="ICON_CALENDER"
                                    className="icon icon-large"
                                />
                            </svg>
                        }
                        inputIconPosition="after"
                        small={true}
                        block={false}
                        numberOfMonths={1}
                        date={this.state.date}
                        onDateChange={date => this.handleDateChange(date)}
                        focused={this.state.focused}
                        onFocusChange={({ focused }) =>
                            this.setState({ focused })
                        }
                        openDirection="up"
                        hideKeyboardShortcutsPanel={true}
                    />
                </FormGroup>
            </Form>
        </Container>
    </div>
        )
    }
}


export default ReactCal