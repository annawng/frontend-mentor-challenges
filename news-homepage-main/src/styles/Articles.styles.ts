import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-bottom: 80px;

  @media (max-width: 999px) {
    margin-block: 56px;
  }
`;
