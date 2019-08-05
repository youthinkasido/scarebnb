
import React from 'react';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { Route } from 'react-router-dom'
Map

import FilterForm from './filter_form';
import GreetingContainer from '../greeting/greeting_container';
import Map from '../map';


const cities = [
  {
    id: 1,
    name: 'Atlanta, ',
    state: 'GA'
  
  },

  {
    id: 2,
    name: 'San Francisco, ',
    state: 'CA'

  },
  {
    id: 3,
    name: 'New York, ',
    state: 'NY'
  
  },
  {
    id: 4,
    name: 'Detroit, ',
    state: 'MI'

  },

{
  id: 5,
    name: 'Biltmore, ',
    state: 'NC'
}

]

function searchingFor(term) {
  return function (x) {
    return x.name.toLowerCase().includes(term.toLowerCase()) || !term
  }
}

class Search extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      cities: cities,
      term: '',
    }

     this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    this.setState({ term: e.target.value })
    this.props.history.push('/spots')
  }


  render(){ 

  
    const {term, people}= this.state
  return (
    <div className='search'>
       <div className="search-container">
         <div>
          
         </div>
          <img className="air-bnb-logo" src="./airbnb.svg" alt=""/>
          <img className="magnifying-glass" src="/magnifying-glass.png"/>
          <span className="icon"></span>
          <div className="google-map">
           
          </div>
          <form >
        
          <input className="search-bar" onChange={this.handleSubmit} type="text" placeholder="try 'Atlanta'" value={term}/>
       
      
         </form>
            {
              this.state.cities.filter(searchingFor(term)).map( city=>
                <div className="search-completer" key={city.id}>
                  <img className="search-map-pin" src="./pin.svg" />
                  <h1>{city.name} {city.state}</h1>
        
                </div>
            )
             }
        </div>
    </div>
    )
  }



}



export default Search




///// steps

// created a class
// set the state
// added form and handleSubmit 