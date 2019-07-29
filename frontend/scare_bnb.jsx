import React from 'react';
import ReactDOM from 'react-dom';
import { signUp, signIn, signOut } from './util/session_api_util';




document.addEventListener('DOMContentLoaded', () => {
    window.signUp = signUp
    window.signIn = signIn
    window.signOut = signOut
    const root = document.getElementById("root");
    ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);

});