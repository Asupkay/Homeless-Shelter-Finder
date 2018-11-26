import React from 'react'
import StandardHeader from '../../components/header';
import { Button, Form, Grid} from 'semantic-ui-react'
import { NavLink } from "react-router-dom";

const SignUpVolunteer = () => {
  return (
    <React.Fragment>
      <StandardHeader header="Information Form" subHeader="Enter the information below to find a shelter that best fits your skills"/>

      <Form style={{display: "block"}}>
        <Form.Group widths="equal">
          <Form.Field> 
            <label>First Name</label> 
            <input placeholder="First Name"/>
          </Form.Field>
          <Form.Field> 
            <label>Last Name</label> 
            <input placeholder="Last Name"/>
          </Form.Field>
        </Form.Group>
        <Form.Group grouped>
          <label>Skills</label>
          <Grid stackable columns={4}>
            <Grid.Column>
              <Form.Field label='General Handiness' control='input' type='checkbox' />
            </Grid.Column>
            <Grid.Column>
              <Form.Field label='Plumbing' control='input' type='checkbox' />
            </Grid.Column>
            <Grid.Column>
              <Form.Field label='Electrical' control='input' type='checkbox' />
            </Grid.Column>
            <Grid.Column>
              <Form.Field label='IT' control='input' type='checkbox' />
            </Grid.Column>
          </Grid>
        </Form.Group>
        <Form.Field> 
          <label>Email</label> 
          <input placeholder="Email"/>
        </Form.Field>
        <NavLink to="/dashboard/volunteer">
          <Form.Field control={Button}>Submit</Form.Field>
        </NavLink>
      </Form>
    </React.Fragment>
  )
  
}

export default SignUpVolunteer;
