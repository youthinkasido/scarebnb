
import React from 'react';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { Route } from 'react-router-dom'


import FilterForm from './filter_form';
import GreetingContainer from '../greeting/greeting_container';





const Search = () =>{
  return (
    <div className='search'>
       <div className="search-container">
          <img className="air-bnb-logo" src="./airbnb.svg" alt=""/>
          <img className="magnifying-glass" src="/magnifying-glass.png"/>
          <span className="icon"></span>

          <form >
            <input className="search-bar" type="text" placeholder="try 'Baltimore'" value=""/>
          </form>

        </div>
    </div>
    )
}
  



export default Search




