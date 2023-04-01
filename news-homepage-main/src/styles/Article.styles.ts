import styled from 'styled-components';

export const Container = styled.article`
  display: flex;
  gap: 24px;
  align-items: center;
`;

export const Image = styled.img`
  height: 130px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Number = styled.span`
  display: block;
  color: var(--grayish-blue);
  font-size: 3rem;
`;

export const Title = styled.h3`
  color: var(--very-dark-grayish-blue);
  font-weight: 800;
`;

export const Teaser = styled.p`
  color: var(--dark-grayish-blue);
`;
