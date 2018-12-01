import React, { Component } from "react";
import axios from 'axios';
import MapContainer from '../../../components/googleMapContainer';

class DashboardStaff extends Component {
  state = {
    center: {lat: 37.7749, lng: -122.4194},
    shelters: []
  }

  componentWillMount = async () => {
    let queryString = this.props.history.location.search;
    let jobFilter  = queryString.substring(6, queryString.length).split(',');

    this.setState({jobFilter: jobFilter});

    let shelters = await axios.get('/api/v1/shelters');
    console.log(shelters);
    this.setState({shelters: shelters.data.shelters});
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({ center: {lat: position.coords.latitude, lng: position.coords.longitude}});
    });
  }

  render() {
    return(<MapContainer center={this.state.center} jobFilter={this.state.jobFilter} shelters={this.state.shelters}/>)
  }
};

export default DashboardStaff;
