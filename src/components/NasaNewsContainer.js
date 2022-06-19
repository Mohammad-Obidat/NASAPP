import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../pages/Home';
import Search from '../pages/Search';
import Favorite from '../pages/Favorite';
import NasaPostDetails from '../pages/NasaPostDetails';

function NasaNewsContainer() {
  return (
    <div style={{ margin: '70px 30px' }}>
      <Route exact path='/' render={() => <Home />} />
      <Route exact path='/search' render={() => <Search />} />
      <Route exact path='/favorite' render={() => <Favorite />} />
      <Route
        exact
        path='/favorite/:postId'
        render={({ match }) => <NasaPostDetails match={match} />}
      />
    </div>
  );
}

export default NasaNewsContainer;
