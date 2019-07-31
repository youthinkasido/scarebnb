import React from 'react';

const Greeting = ({ currentUser, logout, openModal }) => {

    const sessionLinks = () => (
        <nav className="login-signup">
            <button onClick={() => openModal('login')}>Login</button>
            &nbsp;or&nbsp;
      <button onClick={() => openModal('signup')}>Signups</button>
        </nav>
    );
    const personalGreeting = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Hi, {currentUser.email}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );

    return (
        currentUser ?
            
            console.log('there is a current user!') :
            sessionLinks()

           
               
            
    );
};

export default Greeting;
