import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import PostCard from '../components/postCard.js';

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
          {favoriteNasaNews.map((p, i) => {
            return (
              <React.Fragment key={i}>
                <PostCard post={p} />
              </React.Fragment>
            );
          })}
        </>
      )}
    </>
  );
}

export default Favorite;
