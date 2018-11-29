import React, { Component } from 'react'
import StandardHeader from '../../components/header';
import { Button, Form, Grid, Checkbox} from 'semantic-ui-react'

class SignUpVolunteer extends Component {

  state = {}

  handleChange = (e, data) => {
    const { checked, name } = data;

    this.setState({
      [name]: checked
    });
  };

  handleSubmit = () => {
    console.log(this.state);
    let attributes = [];
    Object.keys(this.state).forEach((key) => {
      if(this.state[key] === true) {
        attributes.push(key);
      }
    });
    console.log(attributes);
    if(attributes.length === 0) {
      return false;
    }
    this.props.history.push(`/dashboard/volunteer?jobs=${encodeURI(attributes)}`);
  }

  render() {
    return (
      <React.Fragment>
        <StandardHeader header="Information Form" subHeader="Enter the information below to find a shelter that best fits your skills"/>

        <Form style={{display: "block"}} onSubmit={ this.handleSubmit }>
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
                <Form.Field label='General Handiness' name="General Handiness" control={ Checkbox } type='checkbox' onChange={this.handleChange}/>
              </Grid.Column>
              <Grid.Column>
                <Form.Field label='Plumbing' name="Plumbing" control={ Checkbox } type='checkbox' onChange={this.handleChange}/>
              </Grid.Column>
              <Grid.Column>
                <Form.Field label='Electrical' name="Electrical" control={ Checkbox } type='checkbox' onChange={this.handleChange}/>
              </Grid.Column>
              <Grid.Column>
                <Form.Field label='IT' name="IT" control={ Checkbox } type='checkbox' onChange={this.handleChange}/>
              </Grid.Column>
            </Grid>
          </Form.Group>
          <Form.Field> 
            <label>Email</label> 
            <input placeholder="Email"/>
          </Form.Field>
          <Form.Field control={Button}>Submit</Form.Field>
        </Form>
      </React.Fragment>
    )
  }
  
}

export default SignUpVolunteer;
