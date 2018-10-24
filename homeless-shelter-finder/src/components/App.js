import React, { Component } from "react";
import { Route } from "react-router-dom";
import SignUp from "./pages/signup/SignUp";
import SignUpVolunteer from "./pages/signup/SignUpVolunteer";
import SignUpStaff from "./pages/signup/SignUpStaff";
import Volunteer from "./pages/dashboard/Volunteer";
import Staff from "./pages/dashboard/Staff/";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Shelter Helper</h1>
        </header>

        <Route path="/signup" component={SignUp} exact />
        <Route path="/signup/volunteer" component={SignUpVolunteer} />
        <Route path="/signup/staff" component={SignUpStaff} />
        <Route path="/dashboard/volunteer" component={Volunteer} />
        <Route path="/dashboard/staff" component={Staff} />
      </div>
    );
  }
}

export default App;
