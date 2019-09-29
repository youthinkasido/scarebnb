
import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { Route } from 'react-router-dom'


import FilterForm from './filter_form';
import GreetingContainer from '../greeting/greeting_container';
import Map from '../map';
import SpotsIndex from '../spots/spot_index';
import { searchSpot } from '../../actions/spot_actions';




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

class Search extends React.Component {
  constructor(props) {
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

  handleChange(e) {
    e.preventDefault()
    this.setState({ term: e.target.value })
    this.setState({ showResults: true })
    this.props.searchSpot(e.target.value)
  }

  hideSearchSuggestions() {
    this.setState({
      showResults: false
    })
    this.props.history.push('/spots')
  }
  render() {
    const goodCities = this.state.cities.filter(searchingFor(this.state.term));
    let dropDown = null;
    if (this.props.location.pathname === '/spots' && this.state.showResults) {
      dropDown = goodCities.map(city => (
        <div onClick={() => this.hideSearchSuggestions()} className="search-completer" key={city.id}>

          <h1>{city.name} {city.state}</h1>
          <img className="search-map-pin" src="./pin.svg" />
        </div>
      ))
    }

    const { term, people } = this.state
    return (
      <div className='search'>
        <div className="search-container">
          <img className="magnifying-glass" src="/magnifying-glass.png" />
          {/* <img id={this.props.location.pathname === '/' ? "search-button-orange" : 'hide'} src="./search.png" /> */}

          <span className="icon"></span>
          <div className="google-map">
          </div>
          <form onSubmit={this.handleSubmit}>


            <input id="search-bar" className="search-bar" onChange={this.handleChange} type="text" placeholder="try 'Atlanta'" value={term} />
          </form>
          {dropDown}
        </div>
      </div>
    )
  }
}
export default withRouter(Search)