import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../pages/Home';
import Search from '../pages/Search';

function NasaNewsContainer() {
  return (
    <div style={{ margin: '70px 30px' }}>
      <Route exact path='/' render={() => <Home />} />
      <Route exact path='/search' render={() => <Search />} />
    </div>
  );
}

export default NasaNewsContainer;
