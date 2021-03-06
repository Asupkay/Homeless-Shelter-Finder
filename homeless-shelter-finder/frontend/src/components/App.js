import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import SignUp from "./pages/signup/SignUp";
import SignUpVolunteer from "./pages/signup/SignUpVolunteer";
import SignUpStaff from "./pages/signup/SignUpStaff";
import Volunteer from "./pages/dashboard/Volunteer";
import Staff from "./pages/dashboard/Staff/";
import NavBar from "./components/navBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>

        <div className="ui container">
          <Switch>
            <Route path="/signup" component={SignUp} exact />
            <Route path="/signup/volunteer" component={SignUpVolunteer} />
            <Route path="/signup/staff" component={SignUpStaff} />
            <Route path="/dashboard/volunteer" component={Volunteer} />
            <Route path="/dashboard/staff/:shelterID" component={Staff} />
            <Redirect to="/signup/" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
