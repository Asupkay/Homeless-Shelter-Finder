import React, { Component } from "react";

class NewTaskForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = props.onSubmit;

    this.defaultState = { title: "", job: "Plumbing", description: "" };
    this.state = this.defaultState;
  }

  handleChange = e => {
    const { value, name } = e.target;

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
      <form id="newTaskForm" onSubmit={this.handleSubmit}>
        <label htmlFor="taskTitle">Task Title:</label>
        <input
          id="taskTitle"
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
        />

        <label htmlFor="taskJob">Type of work required:</label>
        <select
          id="taskJob"
          name="job"
          value={this.state.job}
          onChange={this.handleChange}
        >
          <option value="General Handiness">General Handiness</option>
          <option value="Plumbing">Plumbing</option>
          <option value="Electrical">Electrical</option>
          <option value="IT">IT</option>
        </select>

        <label htmlFor="taskDescription">Task Description: </label>
        <textarea
          id="taskDescription"
          name="description"
          value={this.state.description}
          onChange={this.handleChange}
        />

        <button>Add Task</button>
      </form>
    );
  }
}

export default NewTaskForm;
