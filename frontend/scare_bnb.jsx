import React from 'react';
import ReactDOM from 'react-dom';


import { login, signup, logout } from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';


document.addEventListener('DOMContentLoaded', () => {
    window.login = login
    window.signup = signup
    window.signOut = logout

    let store;
    
    if (window.currentUser){
        const preloadedState = {
            session: { currentUser: window.currentUser.id},
            entities: {
                users: { [window.currentUser.id]: window.currentUser}
            }
        }
        store = configureStore(preloadedState);
        delete window.currentUser;

    }else{
        store = configureStore()
        
    }
    const root = document.getElementById("root");
    window.store = store;
    window.logout = logout;
    ReactDOM.render(<Root store={store}/>, root);



});