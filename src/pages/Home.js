import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';

function Home() {
  const [nasaNew, setNasaNew] = useState({});

  const getNasaNew = async () => {
    let nasaNewHomePage = await axios.get('http://localhost:5000/');
    setNasaNew(nasaNewHomePage.data);
  };

  useEffect(() => {
    (async () => {
      await getNasaNew();
    })();
  }, []);

  return (
    <>
      <h1>NASA News</h1>
      <hr />
      <Card style={{ width: '100%' }}>
        {nasaNew.mediaType === 'image' ? (
          <Card.Img
            variant='top'
            src={nasaNew.url}
            alt='cardImage'
            style={{
              width: '30rem',
              display: 'block',
              margin: 'auto',
            }}
          />
        ) : (
          <video src={nasaNew.url} controls>
            Your browser does not support the video tag.
          </video>
        )}

        <Card.Body>
          <Card.Title>{nasaNew.title}</Card.Title>
          <Card.Text>{nasaNew.description}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default Home;
