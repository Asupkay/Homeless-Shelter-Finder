import React from "react";
import { NavLink } from "react-router-dom";
import "./signup.css";

const SignUpStaff = props => (
  <main className="signup signup--staff">
    <header>
      <h2>
        Enter the information below to start finding help with your shelter
      </h2>
    </header>

    <form>
      <label htmlFor="shelterAddress">Shelter Address:</label>
      <input id="shelterAddress" type="text" />

      <label htmlFor="staffFullname">Your Full Name:</label>
      <input id="staffFullname" type="text" />

      <label htmlFor="staffPosition">Your Position at this shelter:</label>
      <input id="staffPosition" type="text" />

      <label htmlFor="staffEmail">Email:</label>
      <input id="staffEmail" type="text" />

      <NavLink to="/dashboard/staff">
        <button>Submit</button>
      </NavLink>
    </form>
  </main>
);

export default SignUpStaff;
