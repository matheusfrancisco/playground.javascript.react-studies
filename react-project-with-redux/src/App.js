import React from 'react';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';

import GlobalStyle from './styles/global';

function App() {
  return (
  <BrowserRouter>
    <Header />
    <Routes />
    <GlobalStyle />
  </BrowserRouter>
  );
}

export default App;
