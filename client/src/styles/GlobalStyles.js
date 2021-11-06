import { css } from "@emotion/react";

export const GlobalStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Montserrat", sans-serif;
  }

  body {
    background-color: #1a2227;
  }

  html {
    min-height: 100vh;
  }

  ul,
  li,
  h1,
  h2,
  h3,
  p,
  button {
    margin: 0;
    padding: 0;
  }

  ul,
  li {
    list-style: none;
  }
`;
