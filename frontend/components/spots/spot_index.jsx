import React, { Component } from 'react';
import { Route } from 'react-router-dom';



class SpotsIndex extends Component {
    componentDidMount() {
        this.props.fetchAllspots();
    }

  render() {
    const { spots } = this.props;


    return (
        <section className="spots-index">
            <ul>
                {spots.map(spot => <SpotIndexItem key={spot.id} spot={spot}/>)}
            </ul>
        </section>
    )
  }
}

 

