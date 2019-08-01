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
                className="logged-in-nav-bar">
                    <div className="nav-dropdown">
                <i className="far fa-user-circle nav-dropdown-button"></i>

        
                    <div className="nav-dropdown-content">
                        <p><Link to="/" onClick={logout}>Bookings</Link></p>
                        <p><Link to="/" onClick={logout}>Log Out</Link></p>
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
