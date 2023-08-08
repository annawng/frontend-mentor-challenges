import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  flex-basis: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavList = styled.ul`
  list-style-type: none;
  padding: 4rem;
  border-radius: 8px;
  margin-inline: auto;
  text-align: center;
  background-color: var(--color-primary);
  display: flex;
  flex-direction: column;
  gap: 36px;
  width: 100%;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

export const Link = styled(NavLink)<{ $role?: string }>`
  color: var(--color-white);
  text-decoration: none;
  display: inline-block;
  width: 100%;

  ${(props) =>
    props.$role === 'cta' &&
    css`
      background-color: var(--color-secondary);
      padding: 16px;
      border-radius: 32px;
    `}
`;

export const Divider = styled.hr`
  margin-top: 36px;
  height: 1px;
  background-color: var(--color-neutral-200);
  opacity: 30%;
  border: none;
`;
