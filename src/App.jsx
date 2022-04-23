import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Pages from './pages';
import GlobalStyle from './styles/GlobalStyle';

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Pages />
    </BrowserRouter>
  );
}
