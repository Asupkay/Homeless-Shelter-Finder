import React from 'react';
import { Item, Button, Icon } from 'semantic-ui-react';

const Task = (props) => (
  <Item>
    <Item.Content>
      <Item.Header>{props.title}</Item.Header>
      <Item.Meta>{props.job}</Item.Meta>
      <Item.Description>{props.description}</Item.Description>
    </Item.Content>
    <Item.Extra>
      <Button as="a" href={`mailto: ${props.contact}`} primary floated="right">
        Send Email
        <Icon name="right chevron"/>
      </Button>
    </Item.Extra>
  </Item>
)

export default Task;
