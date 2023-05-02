import styled, { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
  // Reset
  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html, body {
    height: 100%;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  #root, #__next {
    isolation: isolate;
  }

  // Base styles
  :root {
    font-size: 62.5%;
    --soft-orange: hsl(35, 77%, 62%);
    --soft-red: hsl(5, 85%, 63%);
    --off-white: hsl(36, 100%, 99%);
    --grayish-blue: hsl(233, 8%, 79%);
    --dark-grayish-blue: hsl(236, 13%, 42%);
    --very-dark-grayish-blue: hsl(240, 100%, 5%);
  }

  body {
    font-family: 'Inter', sans-serif;
    font-size: 1.5rem;
    height: fit-content;
    padding-inline: 16px;
    background-color: var(--off-white);

    @media (min-width: 600px) {
      padding-inline: 8%;
    }

    @media (min-width: 1250px) {
      padding-inline: 10%;
    }
  }
`;

// Used to maintain proper heading structure for screen readers
export const visuallyHidden = css`
  position: absolute;
  left: -10000px;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;

export const HiddenH1 = styled.h1`
  ${visuallyHidden}
`;

export const HiddenH2 = styled.h2`
  ${visuallyHidden}
`;
