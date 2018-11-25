import React from "react";
import { NavLink } from "react-router-dom";
import "./signup.css";

const SignUp = props => (
  <React.Fragment>
    <h2 className="ui header">
      Welcome to Shelter Helper!
      <div className="sub header">
        Our site is meant to connect people who would like to volunteer their
        time and skills at local homeless shelters with the people running the
        shelters that could use their help.
      </div>
    </h2>
    <div className="ui divider" />
   
    <div className="ui padded segment">
      <NavLink to="/signup/volunteer" className="ui fluid primary button" role="button">
        I am interested in volunteering.
      </NavLink>
      <div class="ui horizontal divider">Or</div>

      <NavLink to="/signup/staff" className="ui fluid secondary button" role="button">
        I am currently a staff member of a homeless shelter.
      </NavLink>
    </div>
  </React.Fragment>
);

export default SignUp;
