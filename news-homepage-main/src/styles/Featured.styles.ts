import styled from 'styled-components';

export const Article = styled.article`
  grid-column: span 2;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Image = styled.div`
  background-image: url('/image-web-3-mobile.jpg');
  aspect-ratio: 1;
  width: 100%;
  height: 100%;
  background-size: cover;

  @media (min-width: 800px) {
    background-image: url('/image-web-3-desktop.jpg');
    aspect-ratio: 3/2;
  }

  @media (min-width: 1000px) {
    aspect-ratio: auto;
  }
`;

export const Content = styled.div`
  @media (min-width: 600px) {
    display: flex;
    align-items: center;
    gap: 56px;
  }
`;

export const Div = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (min-width: 600px) {
    flex-shrink: 1.2;
  }
`;

export const Title = styled.h3`
  font-size: 5.6rem;
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
    background-color: var(--very-dark-grayish-blue);
  }
`;
