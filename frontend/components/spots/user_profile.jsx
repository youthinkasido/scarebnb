import React from 'react';
import { withRouter } from 'react-router-dom';



class UserProfile extends React.Component {
    constructor(props) {
        super(props)

    }

    

componentDidMount(){
    this.props.fetchBookings(this.props.currentUser)
}


    render(){
       

        // if (!Object.values(this.props.currentUser.bookings).length > 0){
        //     return null;
        // }

        // if (!this.props.currentUser.bookings){
        //     return null;
        // }

        return(

            <div className="user-profile-container">hiiiiiiiiiii{this.props.currentUser.bookings[1]}</div>
        )
    }



}

export default UserProfile