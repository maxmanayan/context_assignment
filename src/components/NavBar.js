import React from 'react';
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const NavBar = () => {
  return(
    <Menu>
      <NavLink to="/">
        <Menu.Item>
          Home
        </Menu.Item>
      </NavLink>
      <NavLink to="/user/profile">
        <Menu.Item>
          User Profile
        </Menu.Item>
      </NavLink>
    </Menu>
  )
}


export default NavBar;