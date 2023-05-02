import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Icons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  z-index: -1;
`;

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding-block: 32px;

  &.menu-active {
    background-color: transparent;
  }

  @media (min-width: 800px) {
    padding-bottom: 56px;
    font-size: 1.6rem;
  }
`;

export const Icon = styled.img`
  @media (min-width: 600px) {
    display: none;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;

  &.menu-active {
    background-color: rgb(0, 0, 0, 0.5);
    z-index: 0;
  }
`;

export const Menu = styled.ul`
  display: block;

  .links {
    display: flex;
    gap: 32px;
  }

  @media (max-width: 599px) {
    position: fixed;
    right: 0;
    top: 0;
    background-color: white;
    height: 100vh;
    display: block;
    width: 70%;
    padding: 16rem 2rem;
    transform: translateX(100%);
    transition: 350ms;

    .links {
      flex-direction: column;
      gap: 24px;

      a {
        color: var(--very-dark-grayish-blue);
        font-size: 1.8rem;
      }
    }

    .close-icon {
      position: absolute;
      top: 3rem;
      right: 2rem;
      width: fit-content;
      align-self: end;
    }

    &.active {
      transform: translateX(0%);
    }
  }
`;

export const MenuItem = styled.li`
  list-style: none;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: var(--dark-grayish-blue);
  transition: 0.2s;

  &:hover {
    color: var(--soft-red);
  }
`;
