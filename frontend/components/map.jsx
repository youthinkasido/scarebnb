import React from 'react';
import ReactDOM from 'react-dom';
import {withRouter} from 'react-router-dom'

// const mapCenter = { lat: 33.748997, lng: -84.387985 };
// center is passed in as props from the spot index

const allSpots = [
    { lat: 37.775785, lng: -122.445979, name: "Papalote" },
    { lat: 37.772045, lng: -122.437015, name: "The Little Chihuahua" },
    { lat: 37.781899, lng: -122.410426, name: "Cancun" }
];

 class Map extends React.Component {
    constructor(props) {
        super(props);
        this.addSpot = this.addSpot.bind(this);  
    }

    componentDidUpdate(){
        const map = ReactDOM.findDOMNode(this.refs.map)
        const options = {
        center: this.props.center,
        zoom: 13
        }

        this.map = new google.maps.Map(map,options)
        this.listenForMove();
        this.props.spots.forEach(this.addSpot);
    }
        addSpot(spot){
            const pos = new google.maps.LatLng(spot.lat,spot.lng)
                const marker = new google.maps.Marker({
                    position: pos,
                    map: this.map
                });
         
            const that = this
            marker.addListener('click', ()=>{
                that.props.history.push(`spots/${spot.id}`)
            });
        }

        listenForMove(){
            const that = this;
            google.maps.event.addListener(that.map, 'idle', ()=>{
                const bounds = that.map.getBounds();

                if (!bounds){
                    return null
                }

                console.log('center',
                    bounds.getCenter().lat(),
                    bounds.getCenter().lng());
                console.log("north east",
                    bounds.getNorthEast().lat(),
                    bounds.getNorthEast().lng());
                console.log("south west",
                    bounds.getSouthWest().lat(),
                    bounds.getSouthWest().lng());
                
            })
        }

        render(){
        
        return (
            <div>       
                <div id='map' ref='map' />
            </div>
        );
    }
}


export default withRouter(Map);
