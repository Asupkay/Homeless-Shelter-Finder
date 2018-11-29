import React, { Component } from "react";
import {Form, Input, Dropdown, Button, TextArea } from 'semantic-ui-react'; 

 const options = [
  {key: "g", text: "General Handiness", value: "General Handiness"},
  {key: "p", text: "Plumbing", value: "Plumbing"},
  {key: "e", text: "Electrical", value: "Electrical"},
  {key: "i", text: "IT", value: "IT"}
]

class NewTaskForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = props.onSubmit;
    const title = props.title || "";
    const job = props.job || "";
    const description = props.description || "";
    const id = props.id || "";
    const contact = props.contact || "";

    this.defaultState = { id, title, job, description, contact };
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
      if(this.props.closeModal) {
        this.props.closeModal();
      }
    } else {
      alert("Bad input");
    }
  };

  render() {
    return (
      <Form style={{display: "block"}} onSubmit={this.handleSubmit}>
        <Form.Field control={Input} label='Task Title' name="title" placeholder='Task Title' onChange={this.handleChange} value={this.state.title}/>
        <Form.Field control={Dropdown} label='Skill' name="job" onChange={this.handleChange} selection options={options} placeholder='Skill' value={this.state.job}/>
        <Form.Field control={TextArea} label="Description" name="description" placeholder = "Description" onChange={this.handleChange} row="3" value={this.state.description}/>
        <Form.Field control={Input} label="Contact" placeholder="Email" name="contact" onChange={this.handleChange} value={this.state.contact}/> 

        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
    );
  }
}

export default NewTaskForm;
