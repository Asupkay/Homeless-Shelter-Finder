import React from 'react';
import { Header, Divider } from 'semantic-ui-react'

const StandardHeader = (props) => {
  return (
    <React.Fragment>
      <Header
        as='h2'
        content={props.header}
        subheader={props.subHeader}
      />
      <Divider/>
    </React.Fragment>
  );
}

export default StandardHeader;

