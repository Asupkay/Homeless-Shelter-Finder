import React from "react";
import { NavLink } from "react-router-dom";

const SignUpVolunteer = props => (
  <main className="signup__volunteer">
    <header>
      <h2>
        Enter the information below to start finding help with your shelter
      </h2>
    </header>

    <form>
      <label htmlFor="volunteerFullname">
        Full Name: <input id="volunteerFullname" type="text" />
      </label>

      <div className="signup__volunteer__skills">
        What are your skills?
        <label htmlFor="handinessSkill">
          General Handiness:
          <input
            id="handinessSkill"
            type="checkbox"
            name="skills"
            value="handiness"
          />
        </label>
        <label htmlFor="plumbingSkill">
          Plumbing:
          <input
            id="plumbingSkill"
            type="checkbox"
            name="skills"
            value="plumbing"
          />
        </label>
        <label htmlFor="electricalSkill">
          Electrical:
          <input
            id="electricalSkill"
            type="checkbox"
            name="skills"
            value="electrical"
          />
        </label>
        <label htmlFor="ITSkill">
          IT:
          <input id="ITSkill" type="checkbox" name="skills" value="IT" />
        </label>
      </div>

      <label htmlFor="volunteerEmail">
        Email: <input id="volunteerEmail" type="text" />
      </label>
      <NavLink to="/dashboard/volunteer">
        <button>Submit</button>
      </NavLink>
    </form>
  </main>
);

export default SignUpVolunteer;
