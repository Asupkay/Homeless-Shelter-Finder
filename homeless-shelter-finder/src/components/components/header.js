import React from 'react';

const Header = (props) => {
  return (
    <React.Fragment>
      <h2 className="ui header">
        { props.header }
        <div className="sub header">
          { props.subHeader }
        </div>
      </h2>
      <div className="ui divider" />
    </React.Fragment>
  );
}

export default Header;

