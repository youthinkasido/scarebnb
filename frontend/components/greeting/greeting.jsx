import React from 'react';
import SearchContainer from '../search/search_container'
import { Link } from 'react-router-dom';
import withRouter from 'react-router-dom'
import UserProfileContainer from '../spots/user_profile_container';





const Greeting = ({ currentUser, logout, openModal }) => {
    debugger;
    const sessionLinks = () => (

        <nav className="nav-bar">
         
            <button className="nav-login-button" onClick={() => openModal('login')}>Login</button>
            <button className="nav-signup-button" onClick={() => openModal('signup')}>Signup</button>
         
        </nav>
    );
    const personalGreeting = () => (
        <hgroup className="header-group">
            <h3
                className="logged-in-nav-bar">
                    <div className="nav-dropdown">
                      
                        <i className="far fa-user-circle nav-dropdown-button"></i>
                        <img className="clown-profile" src="./clownphoto.png"/>
                            <div className="nav-secret"></div>
                        <div className="nav-dropdown-content">

                      
                        {/* <p className="bookings"><Link to={`api/users/${currentUser.id}`}>Bookings</Link></p> */}
                        <Link className="bookings" to={`api/users/${currentUser.id}/bookings`}>
                       Bookings
                        </Link>
                        
                            <p className="logout" onClick={logout}>Log Out</p>
                        </div>

                    </div>
                </h3>
        </hgroup>
    );

    return (
        currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
    );
};

export default Greeting;
