import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #1F1D2B;
    --highlight: #FF7551;

    --gray-500: #29292e;
    --gray-600: #202024;

    --title: #ffffff;
    --text: #a8a8b2;
    --text-disable: #808191;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html { 
    @media (max-width: 1080px) {
      font-size: 93.75%;  // 15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h5, strong {
    font-weight: 600;
    color: var(--title);
    font-family: 'Poppins', sans-serif;
  }

  padding, span {
    font-family: 'Poppins', sans-serif;
  }

  button { 
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
` 