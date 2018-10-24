import React from "react";
import { NavLink } from "react-router-dom";

const SignUpStaff = props => (
  <main className="signup__staff">
    <header>
      <h2>
        Enter the information below to start finding help with your shelter
      </h2>
    </header>

    <form>
      <label htmlFor="shelterAddress">
        Shelter Address: <input id="shelterAddress" type="text" />
      </label>

      <label htmlFor="staffFullname">
        Your Full Name: <input id="staffFullname" type="text" />
      </label>

      <label htmlFor="staffPosition">
        Your Position at this shelter: <input id="staffPosition" type="text" />
      </label>

      <label htmlFor="staffEmail">
        Email: <input id="staffEmail" type="text" />
      </label>

      <NavLink to="/dashboard/staff">
        <button>Submit</button>
      </NavLink>
    </form>
  </main>
);

export default SignUpStaff;
