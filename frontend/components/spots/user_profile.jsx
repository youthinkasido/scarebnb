import React from 'react';
import { withRouter } from 'react-router-dom';




class UserProfile extends React.Component {
    constructor(props) {
        super(props)
     
    }

componentDidMount(){
    this.props.fetchBookings(this.props.currentUser)
   
}

componentDidUpdate(prevProps){
    debugger
    if (this.props.match.params.userId !== prevProps.match.params.userId){
 this.props.fetchBookings(this.props.currentUser)
    }
    
}

    render(){
        console.log(this.props.currentUser)
        
        if (!this.props.currentUser || !this.props.bookings.length > 0 ){
            return null 
        }else{
            let finalBookings = this.props.bookings.filter( booking=> booking.booker_id === this.props.currentUser.id)
            return (
               <div>
                    {finalBookings.map(booking => 
                    <div>
                      
                    <div className="booking-item">Start Date: {booking.start_date} End Date: {booking.end_date} Cost Per Night:{booking.price_per_day}
                                <img src="./shack2.png"></img></div>
                    </div>)}</div>

                // <div className="booking-item">{bookies}</div>
            )
                     
        }
            // <div className="user-profile-container">
            //     this.props.bookings.map(booking=>{
                    
            //     })
                    // <div className="booking-item"> {this.props.bookings.spot_id}</div>
                    // <div className="booking-item"> {this.props.bookings}</div>
                    // <div className="booking-item"> {this.props.bookings}</div>
                    // <div className="booking-item">Here is NOT a booking</div>
                    // <div className="booking-item">Here is NOT a booking</div>
                    // <div className="booking-item">Here is NOT a booking</div>

                // </div> 
        
        
    }

 



}

export default withRouter(UserProfile)