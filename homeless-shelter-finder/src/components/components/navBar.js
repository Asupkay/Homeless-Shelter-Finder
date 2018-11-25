import React from 'react';
import { Menu, Item, Header, Image } from 'semantic-ui-react';
import home from '../../home.svg';

const NavBar = (props) => {
  return (
      <Menu inverted>
        <a href="/">
          <Menu.Item>
            <Image src={home} className="ui mini image" alt="logo" />
          </Menu.Item>
        </a>
        <Menu.Item header>
          Shelter Helper
        </Menu.Item>
      </Menu>
  );
}

export default NavBar
