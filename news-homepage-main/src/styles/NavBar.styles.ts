import styled from 'styled-components';

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding-block: 32px;
`;

export const Menu = styled.ul`
  display: none;

  &.active {
    display: flex;
    flex-direction: column;
  }
`;

export const MenuItem = styled.li`
  list-style: none;
`;
