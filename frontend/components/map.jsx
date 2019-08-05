import React from 'react';
import ReactDOM from 'react-dom';

const mapCenter = { lat: 37.7758, lng: -122.425 };


const allSpots = [
    { lat: 37.775785, lng: -122.445979, name: "Papalote" },
    { lat: 37.772045, lng: -122.437015, name: "The Little Chihuahua" },
    { lat: 37.781899, lng: -122.410426, name: "Cancun" }
];


export default class Map extends React.Component {
    

    constructor(props) {
        super(props);
        this.addSpot = this.addSpot.bind(this);
    }
    

    // this.refs is an object
    //     * populated by giving children a 'ref' prop when we render
    componentDidMount(){

        ReactDOM.render(
            <Map center={mapCenter} spots={allSpots} />,
            document.getElementById('root')
        );
      

        const map = ReactDOM.findDOMNode(this.refs.map)

        const options = {
            center: this.props.center,
            zoom: 13
        }

        this.map = new google.maps.Map(map,options)

        //movement listener
        this.listenForMove();


        // add a marker for each spot
        this.props.spots.forEach(this.addSpot);
    }


        addSpot(spot){
            const pos = new google.map.Latlng(spot.lat,spot.lng)



            const marker = new google.maps.Marker({
                position: pos,
                map: this.map
            });


            marker.addEventListener('click', ()=>{
                alert(`clicked on: ${spot.name}`);
            });
        }

        listenForMove(){
            google.maps.event.addListener(this.map, 'idle', ()=>{
                const bounds = this.map.getBounds();

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
                <p>
                  
        </p>
            </div>
        );
    }

    
}


