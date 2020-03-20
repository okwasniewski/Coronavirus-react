import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './fontello-118af5e6/css/fontello.css';
import './stylesheets/main.scss';
import CountryDetail from './sites/CountryDetail';
import Footer from './layouts/Footer';

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
        <Route path="/Coronavirus-react/" exact component={Main} />
        <Route path="/Coronavirus-react/countries" exact component={Countries} />
        <Route path="/Coronavirus-react/about" component={About} />
        <Route path="/Coronavirus-react/authors" component={Authors} />
        <Route path="/Coronavirus-react/countries/:id" component={CountryDetail}/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
