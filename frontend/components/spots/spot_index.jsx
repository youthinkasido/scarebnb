import React, { Component } from 'react';
import SpotIndexItem from './spot_index_item'
import Map from '../map';
import {GoogleApiWrapper} from 'google-maps-react'


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
                <div className="google-map"><Map spots={spots} center={{ lat: 33.748997, lng: -84.387985 }} /></div>
                <div className="responsive">
                    <div className="flex-container">
                        {spoties}
                    </div>
                </div>
            </div>
        )
    }
}

export default SpotsIndex



