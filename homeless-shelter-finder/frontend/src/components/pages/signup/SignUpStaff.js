import React, { Component } from "react";
import axios from 'axios';
import {Form, Button, Input} from "semantic-ui-react";
import StandardHeader from "../../components/header";
import "./signup.css";

class SignUpStaff extends Component {

  constructor(props) {
    super(props);
    const name =  "";
    const address = "";
    const city = "";
    const state = ""

    this.defaultState = { name, address, city, state };
    this.state = this.defaultState;
  }

  createShelter = async () => {
    console.log(this.state);
    const url = '/api/v1/shelters'
    const body = {name: this.state.name, address: `${this.state.address}, ${this.state.city} ${this.state.state}`};
    const shelter = await axios.post(url, body);
    console.log(shelter);
    this.props.history.push(`/dashboard/staff/${shelter.data.shelter._id}`);
  };

  handleChange = (e, data) => {
    const { value, name } = data;

    this.setState({
      [name]: value
    });
  };


  render() {
    return (
      <React.Fragment>
        <StandardHeader header="Information Form" subHeader="Enter the information below to start finding help for your shelter"/>

        <Form onSubmit={this.createShelter} style={{display: "block"}}>
          <Form.Field control={Input} label='Shelter Name' name='name' placeholder='Shelter Name' onChange={this.handleChange} value={this.state.name}/>
          <Form.Field control={Input} label='Shelter Address' name='address' placeholder='Shelter Address' onChange={this.handleChange} value={this.state.address}/>
          <Form.Group widths="equal">
            <Form.Field control={Input} label='City' name='city' placeholder='City' onChange={this.handleChange} value={this.state.city}/>
            <Form.Field control={Input} label='State' name='state' placeholder='State' onChange={this.handleChange} value={this.state.state}/>
          </Form.Group>
          <Form.Field control={Button}>Submit</Form.Field>
        </Form>
      </React.Fragment>
    );
  }
};

export default SignUpStaff;
