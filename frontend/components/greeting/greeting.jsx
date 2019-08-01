import React from 'react';
import SearchContainer from '../search/search_container'
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout, openModal }) => {
    
   

    const sessionLinks = () => (
        <nav className="login-signup">
            <button onClick={() => openModal('login')}>Login</button>
            <button onClick={() => openModal('signup')}>Signup</button>
        </nav>
    );
    const personalGreeting = () => (
        <hgroup className="header-group">
            <h3
                className="header-name user-dropdown">
                <i className="far fa-user-circle"></i>
                {/* Hello, {currentUser.email} */}
                
                {/* <p><button className=" dropdown-content" onClick={bookings}>Bookings</button></p> */}
                <p><Link to="/" className=" dropdown-content user-drop-down-link" onClick={logout}>Log Out</Link></p>
                
            </h3>
            
        </hgroup>
    );

    return (
        currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
    );
};

export default Greeting;
