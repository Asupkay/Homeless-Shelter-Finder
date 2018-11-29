import React from 'react';
import { Modal, Label, Header, Item, Card} from 'semantic-ui-react';
import Task from './task'

const renderTasks = (tasks) => {
  if(tasks.length === 0) {
    return <p>No tasks</p>
  } else {
    return <React.Fragment>{tasks.map(task => <Task title={task.title} job={task.job} description={task.description} contact={task.contact} key={task.id}/>)}</React.Fragment>
  }
}



const MapMarker = ({ shelter, filter }) => {
  shelter.tasks = shelter.tasks.filter((task) => {
    return filter.indexOf(task.job) >= 0;
  });

  return (
  <div style={{width: "-50%", height: "-50%"}}>
    <Modal trigger={<Label as="a" circular color={shelter.tasks.length > 0 ? "red" : "grey"}>{shelter.tasks.length}</Label>} closeIcon>
      <Header content={`Tasks for ${shelter.name}`}/>
      <Modal.Content>
        <Modal.Description>
          <Card.Group centered items={[{header: shelter.name, meta: shelter.address}]}/>
          <Item.Group divided>
            {renderTasks(shelter.tasks)}
          </Item.Group>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  </div>);
}

export default MapMarker;
