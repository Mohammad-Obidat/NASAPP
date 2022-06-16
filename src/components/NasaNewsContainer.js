import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../pages/Home';
import Search from '../pages/Search';
import Favorite from '../pages/Favorite';

function NasaNewsContainer() {
  return (
    <div style={{ margin: '70px 30px' }}>
      <Route exact path='/' render={() => <Home />} />
      <Route exact path='/search' render={() => <Search />} />
      <Route exact path='/favorite' render={() => <Favorite />} />
    </div>
  );
}

export default NasaNewsContainer;
