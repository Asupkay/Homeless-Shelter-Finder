import React, { Component } from "react";
import NewTaskForm from "./components/NewTaskForm";
import StandardHeader from "../../../components/header";
import TaskCard from "./components/taskCard";
import { Grid, Header } from "semantic-ui-react";
import "../dashboard.css";

class DashboardStaff extends Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };
  }

  componentWillMount = () => {
    console.log(this.props.match.params.shelterID);
  }

  handleNewTask = async task => {
    if (!task.title || !task.description || !task.job) {
      return false;
    }

    try {
      //await tasks.addTask({title: task.title, description: task.description, job: task.job, contact: task.contact});
      //this.setState({ tasks: await tasks.getAllTasks() });
    } catch (e) {
      return false;
    }

    return true;
  };

  deleteTask = async taskID => {
    let tasks = this.state.tasks;
    for(let i = 0; i < tasks.length; i++) {
      let cTask = tasks[i];
      if(cTask.id === taskID) {
        tasks.splice(i, 1);
        this.setState({ tasks: tasks});
      }
    }
  }

  updateTask = async task => {
    if ( !task.title || !task.description || !task.job || !task.contact) {
      return false;
    }

    let tasks = this.state.tasks;
    for(let i = 0; i < tasks.length; i++) {
      let cTask = tasks[i];
      if(cTask.id === task.id) {
        tasks[i] = task;
        this.setState({ tasks: tasks });
      }
    }
    return true;
  }

  render() {
    return (
      <React.Fragment>
        
        <StandardHeader header="Your Shelter's Tasks"/>
        
        <Header as="h3">New Task</Header>
        <NewTaskForm onSubmit={this.handleNewTask} title="" job="" description=""/>

        <Header as="h3">All Tasks</Header>
        <Grid doubling columns={5} style={{marginTop: "10px"}}>
          {this.state.tasks.map(task => (
            <Grid.Column key={task.id}>
              <TaskCard id={task.id} title={task.title} job={task.job} description={task.description} contact={task.contact} onDelete={this.deleteTask} onUpdate={this.updateTask}/>
            </Grid.Column>
          ))}
        </Grid>
        
      </React.Fragment>
    );
  }
}
export default DashboardStaff;
