import React from 'react';

import { Nav, NavList, Link, Divider } from '../styles/NavBar.styles';

const NavBar = () => {
  return (
    <Nav>
      <NavList>
        <li>
          <Link to='/'>Features</Link>
        </li>
        <li>
          <Link to='/'>Pricing</Link>
        </li>
        <li>
          <Link to='/'>Resources</Link>
          <Divider aria-hidden='true' />
        </li>
        <li>
          <Link to='/'>Login</Link>
        </li>
        <li>
          <Link to='/' $role='cta'>
            Sign Up
          </Link>
        </li>
      </NavList>
    </Nav>
  );
};

export default NavBar;
