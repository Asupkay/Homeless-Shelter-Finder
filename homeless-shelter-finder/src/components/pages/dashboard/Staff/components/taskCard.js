import React, { Component } from 'react';
import { Card, Button, Modal, Header } from "semantic-ui-react";
import NewTaskForm from "./NewTaskForm";

class TaskCard extends Component {
  state = { modalOpen: false}

  handleOpen = () => this.setState({ modalOpen: true});
  handleClose = () => this.setState({ modalOpen: false});

  render() {
    return (
      <Card>
        <Card.Content
        header={this.props.title}
        meta={this.props.job}
        description={this.props.description}/>
        <Card.Content extra>
          <div className="ui two buttons">
            <Modal trigger={<Button onClick={this.handleOpen} basic color="green">Edit</Button>} closeIcon onClose={this.handleClose} open={this.state.modalOpen}>
              <Header content="Edit Task"/>
              <Modal.Content>
                <NewTaskForm id={this.props.id} title={this.props.title} job={this.props.job} description={this.props.description} onSubmit={this.props.onUpdate} closeModal={this.handleClose}/>
              </Modal.Content>
            </Modal>
            <Button basic color="red" onClick={() => {this.props.onDelete(this.props.id)}}>
              Delete
            </Button>
          </div>
        </Card.Content>
      </Card>
    )
  }
}

export default TaskCard;
