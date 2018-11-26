import React, { Component } from "react";
import {Form, Input, Dropdown, Button, TextArea } from 'semantic-ui-react'; 

 const options = [
  {key: "g", text: "General Handiness", value: "Male"},
  {key: "p", text: "Plumbing", value: "Plumbing"},
  {key: "e", text: "Electrical", value: "Electrical"},
  {key: "i", text: "IT", value: "IT"}
]

class NewTaskForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = props.onSubmit;

    this.defaultState = { title: "", job: "Plumbing", description: "" };
    this.state = this.defaultState;
  }

  handleChange = (e, data) => {
    const { value, name } = data;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();

    if (await this.onSubmit(this.state)) {
      this.setState(this.defaultState);
    } else {
      alert("Bad input");
    }
  };

  render() {
    return (
      <Form style={{display: "block"}} onSubmit={this.handleSubmit}>
        <Form.Field control={Input} label='Task Title' name="title" placeholder='Task Title' onChange={this.handleChange} />
        <Form.Field control={Dropdown} label='Skill' name="job" onChange={this.handleChange} selection options={options} placeholder='Skill' />
        <Form.Field control={TextArea} label="Description" name="description" onChange={this.handleChange} row="3"/>

        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
    );
  }
}

export default NewTaskForm;
