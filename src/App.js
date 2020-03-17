import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './stylesheets/main.scss';
import Header from './layouts/Header';
import Main from './sites/Main';
import Countries from './sites/Countries';
import About from './sites/About';
import Authors from './sites/Authors';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={Main} />
        <Route path="/countries" component={Countries} />
        <Route path="/about" component={About} />
        <Route path="/authors" component={Authors} />
      </BrowserRouter>
    </div>
  );
}

export default App;
