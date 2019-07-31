import React from 'react';
import ReactDOM from 'react-dom';


import { login, signup, logout } from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';


document.addEventListener('DOMContentLoaded', () => {
<<<<<<< HEAD
    window.login = login
    window.signup = signup
    window.signOut = logout
   

    let store;
=======
    window.signUp = signUp
    window.signIn = signIn
    window.signOut = signOut
    const root = document.getElementById("root");
    ReactDOM.render(<h1>Find a host with a ghost...</h1>, root);
>>>>>>> a1d2c9c21341abc6b4a8beb25c99d00c8db1e58f

    if (window.currentUser){
        const preloadedState = {
            session: { id: window.currentUser.id},
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
    window.store = store
    ReactDOM.render(<Root store={store}/>, root);

});