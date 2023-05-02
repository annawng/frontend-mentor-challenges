import styled from 'styled-components';

export const Main = styled.main`
  @media (max-width: 999px) {
    & > article:last-child {
      padding-bottom: 80px;
    }
  }

  @media (min-width: 1000px) {
    display: grid;
    gap: 64px 32px;
    grid-template-columns: repeat(3, 1fr);
  }
`;
