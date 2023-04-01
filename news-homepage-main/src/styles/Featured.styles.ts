import styled from 'styled-components';

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Title = styled.h3`
  font-size: 4.8rem;
  font-weight: 800;
  line-height: 1;
  color: var(--very-dark-grayish-blue);
`;

export const Teaser = styled.p`
  color: var(--dark-grayish-blue);
`;

export const Button = styled.button`
  color: var(--off-white);
  background-color: var(--soft-red);
  border: none;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 4px;
  padding: 16px 32px;
  cursor: pointer;
  transition: 0.2s;
  width: fit-content;

  &:hover {
    background-color: var(--soft-orange);
  }
`;
