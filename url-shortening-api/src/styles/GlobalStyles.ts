import { createGlobalStyle } from 'styled-components';

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
    --color-primary: hsl(257, 27%, 26%);
    --color-secondary: hsl(180, 66%, 49%);
    --color-tertiary: hsl(0, 87%, 67%);

    --color-neutral-100: hsl(0, 0%, 75%);
    --color-neutral-200: hsl(257, 7%, 63%);
    --color-neutral-300: hsl(255, 11%, 22%);
    --color-neutral-400: hsl(260, 8%, 14%);

    --color-white: hsl(0, 0%, 100%);
  }

  body {
    font-family: 'Poppins', sans-serif;
    font-size: 1.8rem;
    height: fit-content;
  }
`;
