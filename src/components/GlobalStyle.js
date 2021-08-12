import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css2?family=Bitter:wght@400;500;600;700&display=swap');
    background-color: white;
    font-family: 'Bitter', Open-Sans, Helvetica, Sans-Serif;
    color: black;
  }

  a {
    color: #636363;
  }
`;

export default GlobalStyle;
