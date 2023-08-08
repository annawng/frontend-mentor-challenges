import { useState, useEffect } from 'react';
import NavBar from './NavBar';
import logo from '../assets/logo.svg';
import hamburgerIcon from '../assets/icon-menu.svg';
import { Icon, HeaderWrapper, Break } from '../styles/Header.styles';

// https://blog.logrocket.com/developing-responsive-layouts-with-react-hooks/
const useViewport = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return { width };
};

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  const { width } = useViewport();
  const breakpoint = 600;

  return (
    <HeaderWrapper>
      <img src={logo} />
      <Icon
        src={hamburgerIcon}
        alt='Open menu'
        onClick={toggleMenu}
        width={32}
      />
      <Break />
      {(width >= breakpoint || showMenu) && <NavBar />}
    </HeaderWrapper>
  );
};

export default Header;
