import React from "react";
import { NavLink } from "react-router-dom";
import { Segment, Button, Divider, Responsive } from 'semantic-ui-react'
import "./signup.css";
import StandardHeader from "../../components/header";

const SignUp = props => (
  <React.Fragment>
    <StandardHeader header="Welcome to Shelter Helper" subHeader="Our site is meant to connect people who would like to volunteer their time and skills at local homeless shelters with the people running the shelters that could use their help."/>
   
    <Responsive as={Segment} minWidth={Responsive.onlyMobile.maxWidth} padded style={{width: "40%", marginLeft: "auto", marginRight: "auto"}}>
      <NavLink to="/signup/volunteer">
        <Button primary fluid style={{padding: "30px"}}>
          <p style={{fontSize: "17px"}}>I am interested in volunteering.</p>
        </Button>
      </NavLink>
      <Divider horizontal>Or</Divider>

      <NavLink to="/signup/staff">
        <Button secondary fluid style={{padding: "30px"}}>
          <p style={{fontSize: "17px"}}>I am currently a staff member of a homeless shelter.</p>
        </Button>
      </NavLink>
    </Responsive>
    <Responsive as={Segment} {...Responsive.onlyMobile} padded>
      <NavLink to="/signup/volunteer">
        <Button primary fluid style={{padding: "30px"}}>
          <p style={{fontSize: "17px"}}>I am interested in volunteering.</p>
        </Button>
      </NavLink>
      <Divider horizontal>Or</Divider>

      <NavLink to="/signup/staff">
        <Button secondary fluid style={{padding: "30px"}}>
          <p style={{fontSize: "17px"}}>I am currently a staff member of a homeless shelter.</p>
        </Button>
      </NavLink>
    </Responsive>
  </React.Fragment>
);

export default SignUp;
