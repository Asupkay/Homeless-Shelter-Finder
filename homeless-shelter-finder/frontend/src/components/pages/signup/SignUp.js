import React from "react";
import { NavLink } from "react-router-dom";
import { Segment, Button, Divider } from 'semantic-ui-react'
import "./signup.css";
import StandardHeader from "../../components/header";

const SignUp = props => (
  <React.Fragment>
    <StandardHeader header="Welcome to Shelter Helper" subHeader="Our site is meant to connect people who would like to volunteer their time and skills at local homeless shelters with the people running the shelters that could use their help."/>
   
    <Segment padded>
      <NavLink to="/signup/volunteer">
        <Button primary fluid>
          I am interested in volunteering.
        </Button>
      </NavLink>
      <Divider horizontal>Or</Divider>

      <NavLink to="/signup/staff">
        <Button secondary fluid>
          I am currently a staff member of a homeless shelter.
        </Button>
      </NavLink>
    </Segment>
  </React.Fragment>
);

export default SignUp;
