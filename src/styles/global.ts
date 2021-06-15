import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --input-background: #e7e9ee;
    --red: #E52E4D;
    --blue: #5429CC;
    --blue-light: #6933FF;
    --green: #33CC95;
    --text-title: #363F5F;
    --text-body: #969CB3;
    --shape: #FFFFFF;
    --black: #000000;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background-color: var(--background) ;
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  textarea,
  button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    bottom: 0;
    display: fixed;
    justify-content: center;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
  }

  .react-modal-content {
    background-color: var(--background);
    border-radius: 0.25rem;
    max-width: 576px;
    padding: 3rem;
    position: relative;
    width: 100%;
  }

  .react-modal-close {
    background: none;
    border: 0;
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;