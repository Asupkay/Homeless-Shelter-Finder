import React, { Component } from "react";
import NewTaskForm from "./components/NewTaskForm";
import StandardHeader from "../../../components/header";
import { Card, Grid } from "semantic-ui-react";
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
        <NewTaskForm onSubmit={this.handleNewTask}/>

        <Grid doubling columns={5} style={{marginTop: "10px"}}>
          {this.state.tasks.map(task => (
            <Grid.Column key={task.id}>
              <Card
                header={task.title}
                meta={task.job}
                description={task.description}
              />
            </Grid.Column>
          ))}
        </Grid>
        
      </React.Fragment>
    );
  }
}
export default DashboardStaff;
