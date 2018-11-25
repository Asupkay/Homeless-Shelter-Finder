import React from 'react';
import home from '../../home.svg';

const NavBar = (props) => {
  return (
      <div className='ui inverted menu' style={{borderRadius: "0px"}}>
        <div className="item">
          <img src={home} className="ui mini image" alt="logo" />
        </div>
        <div className="header item">Shelter Helper</div>
      </div> 
  );
}

export default NavBar
