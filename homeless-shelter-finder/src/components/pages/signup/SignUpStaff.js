import React from "react";
import {Form, Button} from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import StandardHeader from "../../components/header";
import "./signup.css";

const SignUpStaff = props => (
  <React.Fragment>
    <StandardHeader header="Information Form" subHeader="Enter the information below to start finding help for your shelter"/>

    <Form style={{display: "block"}}>
      <Form.Group widths="equal">
        <Form.Field> 
          <label>First Name</label> 
          <input placeholder="First Name"/>
        </Form.Field>
        <Form.Field> 
          <label>Last Name</label> 
          <input placeholder="Last Name"/>
        </Form.Field>
      </Form.Group>
      <Form.Field> 
        <label>Shelter Address</label> 
        <input placeholder="Shelter Address"/>
      </Form.Field>
      <Form.Field> 
        <label>Your Position at this Shelter</label> 
        <input placeholder="Position"/>
      </Form.Field>
      <Form.Field> 
        <label>Email</label> 
        <input placeholder="Email"/>
      </Form.Field>

      <NavLink to="/dashboard/staff">
        <Form.Field control={Button}>Submit</Form.Field>
      </NavLink>
    </Form>
  </React.Fragment>
);

export default SignUpStaff;
