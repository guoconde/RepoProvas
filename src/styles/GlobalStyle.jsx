import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  button{
    all: unset;

    height: 36px;

    background-color: #1976D2;

    font-family: 'Roboto';
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    text-align: center;
    color: white;

    box-shadow: 1px 0px 5px rgba(0, 0, 0, 0.5);
    border-radius: 5px;

    padding: 0 16px;

    cursor: pointer;
  }
  a {
    color: #4673CACC;
    font-size: 12px;
    font-weight: 500;
    line-height: 24px;
  }
  input {
    width: 100%;
    height: 56px;
    border-radius: 5px;
    border: 2px solid #c6c6c6;
    color: #6c6c6c;
    box-shadow: 1px 0px 5px rgba(0, 0, 0, 0.2);

    font-family: 'Poppins';
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;

    padding: 0 15px;

    ::placeholder {
      color: #6c6c6c;
      font-family: 'Poppins';
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
    }
  }
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body, html {
    width: 100%;
    height: 100%;
    background-color: #e5e5e5;
    font-family: 'Poppins', sans-serif;
    letter-spacing: 1px;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  body::-webkit-scrollbar {
    display: none;
  }

`;

export default GlobalStyle;
