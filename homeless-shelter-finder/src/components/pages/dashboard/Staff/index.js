import React, { Component } from "react";
import NewTaskForm from "./components/NewTaskForm";
import StandardHeader from "../../../components/header";
import { tasks } from "../../../../data/index";
import "../dashboard.css";

class DashboardStaff extends Component {
  constructor(props) {
    super(props);

    this.state = { tasks: [] };
  }

  handleNewTask = async task => {
    if (!task.title || !task.description || !task.job) {
      return false;
    }

    try {
      await tasks.addTask(task);
      this.setState({ tasks: await tasks.getAllTasks() });
    } catch (e) {
      return false;
    }

    return true;
  };

  render() {
    return (
      <React.Fragment>
        
        <StandardHeader header="Your Shelter's Tasks"/>
        
        <h3>New Task</h3>
        <NewTaskForm onSubmit={this.handleNewTask} />

        {this.state.tasks.map(task => (
          <div key={`task-${task.id}`} className="task task--staff">
            <div className="task__title">{task.title}</div>
            <div className="task__job">{task.job}</div>
            <div className="task__description">{task.description}</div>
            <div className="task__claimed">
              {task.claimed ? `Claimed by: ${task.claimed}` : "Unclaimed"}
            </div>
            <div className="task__status">
              {task.completed ? "Completed" : "Not Completed"}
            </div>
          </div>
        ))}
        
      </React.Fragment>
    );
  }
}
export default DashboardStaff;
