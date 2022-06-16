import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostCard from '../components/postCard.js';
import { Card } from 'react-bootstrap';

function Home() {
  const [nasaPost, setNasaPost] = useState({});

  const getNasaNew = async () => {
    let nasaNewHomePage = await axios.get('http://localhost:5000/');
    setNasaPost(nasaNewHomePage.data);
  };

  useEffect(() => {
    (async () => {
      try {
        await getNasaNew();
      } catch (error) {
        throw error;
      }
    })();
  }, []);

  return (
    <>
      <h1>NASA News</h1>
      <hr />
      <PostCard post={nasaPost} />
    </>
  );
}

export default Home;
