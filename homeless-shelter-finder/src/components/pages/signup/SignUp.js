import React from "react";
import { NavLink } from "react-router-dom";
import "./signup.css";

const SignUp = props => (
  <main className="signup signup--volunteer">
    <header>
      <h2>Welcome to Shelter Helper!</h2>
      <p>
        Our site is meant to connect people who would like to volunteer their
        time and skills at local homeless shelters with the people running the
        shelters that could use their help.
      </p>
    </header>

    <div className="signup__buttons">
      <NavLink to="/signup/volunteer" className="signup__button">
        I am interested in volunteering.
      </NavLink>

      <NavLink to="/signup/staff" className="signup__button">
        I am currently a staff member of a homeless Shelter.
      </NavLink>
    </div>
  </main>
);

export default SignUp;
