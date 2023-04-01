import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../assets/logo.svg';
import hamburgerIcon from '../assets/icon-menu.svg';
import { Nav, Menu, MenuItem } from '../styles/NavBar.styles';

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Nav>
      <img src={logo} alt='W News' />
      <img
        src={hamburgerIcon}
        alt='Open menu'
        className='menu-icon'
        onClick={toggleMenu}
      />

      <Menu className={`menu ${showMenu && 'active'}`}>
        <MenuItem>
          <NavLink to='/'>Home</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to='/'>New</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to='/'>Popular</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to='/'>Trending</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to='/'>Categories</NavLink>
        </MenuItem>
      </Menu>
    </Nav>
  );
}

export default NavBar;
