import React from "react";
import { NavLink } from "react-router-dom";
import StandardHeader from '../../components/header';

const SignUpVolunteer = props => (
  <React.Fragment>
    <StandardHeader header="Information Form" subHeader="Enter the information below to find a shelter that best fits your skills"/>

    <form className="ui form">
      <div className="equal width fields">
        <div className="field">
          <label>First Name</label>
          <div className="ui input">
            <input type="text" placeholder="First name"/>
          </div>
        </div>
        <div className="field">
          <label>Last Name</label>
          <div className="ui input">
            <input type="text" placeholder="Last name"/>
          </div>
        </div>
      </div>
      <div className="inline fields">
        <label>What are your skills?</label>
        <div className="field">
          <div className="ui checkbox">
            <input type="checkbox" className="hidden" readOnly="" tabIndex="0" value="handiness"/>
            <label>General Handiness</label>
          </div>
          <div className="ui checkbox">
            <input type="checkbox" className="hidden" readOnly="" tabIndex="0" value="plumbing"/>
            <label>Plumbing</label>
          </div>
          <div className="ui checkbox">
            <input type="checkbox" className="hidden" readOnly="" tabIndex="0" value="eletrical"/>
            <label>Electrical</label>
          </div>
          <div className="ui checkbox">
            <input type="checkbox" className="hidden" readOnly="" tabIndex="0" value="IT"/>
            <label>IT</label>
          </div>
        </div>
      </div>
      <div className="field">
        <label>Email</label>
        <div className="ui input">
          <input type="text" placeholder="Email"/>
        </div>
      </div>
      <div className="field">
        <NavLink to="/dashboard/volunteer">
          <button className="ui button">Submit</button>
        </NavLink>
      </div>
    </form>
  </React.Fragment>
);

export default SignUpVolunteer;
