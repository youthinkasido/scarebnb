
import React from 'react';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { Route } from 'react-router-dom'


import FilterForm from './filter_form';
import GreetingContainer from '../greeting/greeting_container';
import Map from '../map';
import SpotsIndex from '../spots/spot_index';

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

// search filter for locating a city name
function searchingFor(term) {
  return function (cityInList) {
    return cityInList.name.toLowerCase().includes(term.toLowerCase()) || !term
  }
}

class Search extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      cities: cities,
      term: '',
      showResults: false
    }

     this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.hideSearchSuggestions = this.hideSearchSuggestions.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.history.push('/spots')
  }

  handleChange(e){
    e.preventDefault()
    this.setState({ term: e.target.value})
    this.setState({showResults: true})
  }

hideSearchSuggestions(){

  this.setState({
    showResults: false
  })

  this.props.history.push('/spots')

  }
  render(){ 
    
    let dropDown = null;
  if (this.state.showResults){
    const goodCities = this.state.cities.filter(searchingFor(this.state.term));
    dropDown = goodCities.map(city=>(
      <div onClick={() => this.hideSearchSuggestions()} className="search-completer drop" key={city.id}>

        <h1>{city.name} {city.state}</h1>
        <img className="search-map-pin" src="./pin.svg" />
      </div>
    ))
  }

    const {term, people}= this.state
  return (
    <div className='search'>
       <div className="search-container">
         <div>
          
         </div>
        <Link to="/"><img className="air-bnb-logo" src="./airbnb.svg" alt="" /></Link>
          <img className="magnifying-glass" src="/magnifying-glass.png"/>
          <span className="icon"></span>
          <div className="google-map">
           
          </div>
          <form onSubmit={this.handleSubmit}>
          <input className="search-bar" onChange={this.handleChange} type="text" placeholder="try 'Atlanta'" value={term}/>
         </form>

          {dropDown}
        </div>
    </div>
    )
  }



}



export default withRouter(Search)




///// steps

// created a class
// set the state
// added form and handleSubmit 