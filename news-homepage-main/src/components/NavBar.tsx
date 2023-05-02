import React, { useState } from 'react';

import logo from '../assets/logo.svg';
import hamburgerIcon from '../assets/icon-menu.svg';
import closeIcon from '../assets/icon-menu-close.svg';
import {
  Nav,
  Icons,
  Icon,
  Menu,
  MenuItem,
  Link,
  Overlay,
} from '../styles/NavBar.styles';

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <Overlay className={`${showMenu && 'menu-active'}`}></Overlay>
      <Nav className={`${showMenu && 'menu-active'}`}>
        <Icons>
          <img src={logo} alt='W News' />
          <Icon
            src={hamburgerIcon}
            alt='Open menu'
            className='menu-icon'
            onClick={toggleMenu}
          />
        </Icons>

        <Menu className={`menu ${showMenu && 'active'}`}>
          <Icon
            src={closeIcon}
            alt='Open menu'
            className='close-icon'
            onClick={toggleMenu}
          />
          <ul className='links'>
            <MenuItem>
              <Link to='/'>Home</Link>
            </MenuItem>
            <MenuItem>
              <Link to='/'>New</Link>
            </MenuItem>
            <MenuItem>
              <Link to='/'>Popular</Link>
            </MenuItem>
            <MenuItem>
              <Link to='/'>Trending</Link>
            </MenuItem>
            <MenuItem>
              <Link to='/'>Categories</Link>
            </MenuItem>
          </ul>
        </Menu>
      </Nav>
    </>
  );
}

export default NavBar;
