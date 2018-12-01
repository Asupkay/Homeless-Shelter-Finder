import React, { Component } from "react";
import axios from 'axios';
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
    console.log(task);
    if (!task.title || !task.description || !task.job || !task.contact) {
      return false;
    }

    try {
      //await tasks.addTask({title: task.title, description: task.description, job: task.job, contact: task.contact});
      console.log("here");
      const url = '/api/v1/tasks'
      const shelterId = this.props.match.params.shelterID;
      const body = {shelterId, task: {name: task.title, skill: task.job, desc: task.description, contact: task.contact}};

      console.log(shelterId, body);

      await axios.post(url, body);
 
      let getUrl = `${url}?shelterId=${shelterId}`;
      let tasks = await axios.get(getUrl);
      console.log(getUrl, tasks);
      this.setState({ tasks: tasks.data.tasks });
    } catch (e) {
      return false;
    }

    return true;
  };

  deleteTask = async taskID => {

    const shelterId = this.props.match.params.shelterID;
    const getUrl = `/api/v1/tasks?shelterId=${shelterId}`;
    const deleteUrl = `/api/v1/tasks?shelterId=${shelterId}&taskId=${taskID}`;
    await axios.delete(deleteUrl)
    let tasks = await axios.get(getUrl);
    console.log(tasks.data.tasks);
    this.setState({ tasks: tasks.data.tasks });
  }

  updateTask = async task => {
    if ( !task.title || !task.description || !task.job || !task.contact) {
      return false;
    }

    const updateUrl = '/api/v1/tasks';
    const shelterId = this.props.match.params.shelterID;
    const getUrl = `${updateUrl}?shelterId=${shelterId}`;
    console.log(task);
    const body = {shelterId: shelterId, task: {taskId: task.id, name: task.title, skill: task.job, desc: task.description, contact: task.contact}};
    await axios.put(updateUrl, body);
    let tasks = await axios.get(getUrl);
    console.log(tasks);
    this.setState({ tasks: tasks.data.tasks });

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
            <Grid.Column key={task.taskId}>
              <TaskCard id={task.taskId} title={task.taskName} job={task.taskSkill} description={task.taskDesc} contact={task.contact} onDelete={this.deleteTask} onUpdate={this.updateTask}/>
            </Grid.Column>
          ))}
        </Grid>
        
      </React.Fragment>
    );
  }
}
export default DashboardStaff;
