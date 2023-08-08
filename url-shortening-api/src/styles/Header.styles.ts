import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 113px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
  padding: 4rem 2rem;
  background-color: var(--color-white);

  @media (min-width: 600px) {
    padding: 0;
  }
`;

export const Icon = styled.img`
  cursor: pointer;

  @media (min-width: 600px) {
    display: none;
  }
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;
