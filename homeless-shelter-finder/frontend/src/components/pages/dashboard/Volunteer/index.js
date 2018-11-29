import React, { Component } from "react";
import MapContainer from '../../../components/googleMapContainer';

class DashboardStaff extends Component {
  state = {
    center: {lat: 37.7749, lng: -122.4194},
  }

  componentWillMount = () => {
    let queryString = this.props.history.location.search;
    let jobFilter  = queryString.substring(6, queryString.length).split(',');

    this.setState({jobFilter: jobFilter});

    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({ center: {lat: position.coords.latitude, lng: position.coords.longitude}});
    });
  }

  render() {
    return(<MapContainer center={this.state.center} jobFilter={this.state.jobFilter} shelters={[{name: "Alex", address: "593 marmora ave. Tampa Florida", lat: 37.419857, lng: -122.078827, tasks: []}, {name: "Pat", address: "837 Hudson Street Hoboken NJ 33606", lat: 37.89, lng: -120.1, tasks: [{id: 123, title: "Apples", job: "Plumbing", description: "Apples in plumbing", contact: "asupkay1124@gmail.com"},{id: 1234, title: "Apples123", job: "Plumbing", description: "Apples in plumbing", contact: "apples@gmail.com"}]}]}/>)
  }
};

export default DashboardStaff;
