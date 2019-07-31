import React from 'react';
import SearchContainer from '../search/search_container'

const Greeting = ({ currentUser, logout, openModal }) => {

    const sessionLinks = () => (
        <nav className="login-signup">
            <button onClick={() => openModal('login')}>Login</button>
            &nbsp;or&nbsp;
      <button onClick={() => openModal('signup')}>Signup</button>
        </nav>
    );
    const personalGreeting = () => (
       
        <hgroup className="header-group">
            <SearchContainer />
            <h3 className="header-name user-dropdown">
            {currentUser.email}
                <p><button className=" dropdown-content" onClick={logout}>Log Outsdsd</button></p>
                <p><button className=" dropdown-content" onClick={logout}>Log Out</button></p>
                
            </h3>
            
        </hgroup>
    );

    return (
        currentUser ?
            
            personalGreeting(currentUser, logout) :
            sessionLinks()

           
               
            
    );
};

export default Greeting;
