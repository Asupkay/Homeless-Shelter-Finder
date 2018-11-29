import React, { Component } from 'react';
import MapMarker from './mapMarker';
import CurrentLocationMarker from './currentLocation';
import GoogleMapReact from 'google-map-react';
 
class GoogleMapContainer extends Component {
  static defaultProps = {
    center: {
      lat: 59.9512312312,
      lng: 30.33213213123
    },
    zoom: 11
  };

  componentWillMount = () => {
    console.log(this.props)
  }
 
  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyD-aI3Sn2b6syO52CgLkFCFuzjuNEqsApQ"}}
          center={this.props.center}
          defaultZoom={this.props.zoom}
        >

        <CurrentLocationMarker 
          lat={this.props.center.lat}
          lng={this.props.center.lng}
        />        
        {this.props.shelters.map((shelter, index) => { 
          return (<MapMarker
            lat={shelter.lat}
            lng={shelter.lng}
            key={index}
            shelter={shelter}
            filter={this.props.jobFilter}
          />)
        })}
        </GoogleMapReact>
      </div>
    );
  }
}
                                                                                                        
export default GoogleMapContainer;
