import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import FavoritePost from '../components/favoritePosts.js';

function Favorite() {
  const [favoriteNasaNews, setFavoriteNasaNews] = useState([]);

  const getNasaNewsFromDB = async () => {
    let dataFromDB = await axios.get('http://localhost:5000/favorite');
    setFavoriteNasaNews(dataFromDB.data);
  };

  useEffect(() => {
    (async () => {
      try {
        await getNasaNewsFromDB();
      } catch (error) {
        throw error;
      }
    })();
  }, []);

  return (
    <>
      {favoriteNasaNews.length !== 0 && (
        <>
          <FavoritePost posts={favoriteNasaNews} />
        </>
      )}
    </>
  );
}

export default Favorite;
