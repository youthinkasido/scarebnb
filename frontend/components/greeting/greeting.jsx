import React from 'react';
import SearchContainer from '../search/search_container'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'
import UserProfileContainer from '../spots/user_profile_container';
const Greeting = ({ currentUser, logout, openModal }) => {



    window.onclick = function (e) {
        let clownProfile = document.getElementById('clown-profile')
        let navDropDownContent = document.getElementById('nav-dropdown-content')

        if (e.target.id === 'clown-profile' && navDropDownContent) {
            navDropDownContent.classList.toggle('show-nav')
        } else if (e.target.id !== 'clown-profile' && navDropDownContent.classList.contains('show-nav')) {
            navDropDownContent.classList.toggle('show-nav')
        }
    }



    const sessionLinks = () => (


        <div className="nav-container">
            <ul className="nav-bar">
                <img className="air-bnb-front-logo" src="./human-skull.svg" alt="" />
                <h1 className="nav-bar-heading">Scarebnb</h1>

                <SearchContainer />

                <li className="nav-login-button" onClick={() => openModal('login')}>Login</li>
                <li className="nav-signup-button" onClick={() => openModal('signup')}>Signup</li>
            </ul>
        </div>

    );
    const personalGreeting = () => (

        <hgroup className="header-group">
            <div className="nav-container">
                <ul className="nav-bar">
                    <img className="air-bnb-front-logo" src="./human-skull.svg" alt="" />
                    <Link to={'/'}> <h1 className="nav-bar-heading">Scarebnb</h1></Link>
                    <SearchContainer />
                </ul>
            </div >

            <h3
                className="logged-in-nav-bar">
                <div className="nav-bar"></div>
                <div className="nav-dropdown">

                    <img id="clown-profile" className="clown-profile" src="./clownphoto.png" />
                    <i className="far fa-user-circle nav-dropdown-button"></i>
                    <div className="nav-secret"></div>
                    <div id="nav-dropdown-content" className="nav-dropdown-content">
                        <p className="bookings"><a href={`/#/users/${currentUser.id}/bookings`}>Bookings</a></p>
                        <p className="logout" onClick={logout}>Log Out</p>
                    </div>

                </div>
            </h3>
        </hgroup >
    );

    return (
        currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
    );
};

export default withRouter(Greeting)
