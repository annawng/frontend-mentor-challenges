import styled from 'styled-components';

export const Container = styled.section`
  background-color: var(--very-dark-grayish-blue);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-block: 56px;
`;

export const Heading = styled.h2`
  color: var(--soft-orange);
  font-size: 3.2rem;
`;

export const Title = styled.h3`
  color: var(--off-white);
  font-size: 2rem;
  margin-bottom: 8px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: var(--soft-orange);
  }
`;

export const Teaser = styled.p`
  color: var(--grayish-blue);
  line-height: 1.6;
`;

export const Line = styled.hr`
  border: 0.5px solid var(--dark-grayish-blue);
`;
