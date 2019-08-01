import React from 'react';
import SearchContainer from '../search/search_container'
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout, openModal }) => {
    
   

    const sessionLinks = () => (
        <nav className="nav-bar">
            <button className="nav-login-button" onClick={() => openModal('login')}>Login</button>
            <button className="nav-signup-button" onClick={() => openModal('signup')}>Signup</button>
        </nav>
    );
    const personalGreeting = () => (
        <hgroup className="header-group">
            <h3
                className="nav-bar">
                <i className="far fa-user-circle"></i>
                {/* Hello, {currentUser.email} */}
                
                {/* <p><button className=" dropdown-content" onClick={bookings}>Bookings</button></p> */}
                <Link to="/" className="nav-dropdown-button" onClick={logout}>Log Out</Link>
                
            </h3>
            
        </hgroup>
    );

    return (
        currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
    );
};

export default Greeting;
