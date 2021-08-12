import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './normalize.css';
import './styles.css';
import Header from './Header';
import GlobalStyle from './GlobalStyle';
import Main from './Main';

function App() {
  return (
    <>
      <Main />
      <GlobalStyle />
      <Header />
    </>
  );
}

export default App;
