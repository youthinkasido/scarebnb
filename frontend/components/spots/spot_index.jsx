import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SpotIndexItem from './spot_index_item'
import { Link } from 'react-router-dom';
import SpotIndexContainer from './spot_index_container';



class SpotsIndex extends Component {
    constructor(props) {

        super(props)
    }

    componentDidMount() {

        this.props.fetchAllSpots();


    }


    render() {
        const { spots } = this.props;
        const spoties = spots.map(spot => <SpotIndexItem key={spot.id} spot={spot} />)
        
        return (
            <div>

                <section className="spot-index-container">
                    <ul>
                        {spoties}
                    </ul>
                </section>
            </div>
        )
    }
}

export default SpotsIndex



