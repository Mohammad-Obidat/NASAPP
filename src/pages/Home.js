import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';

function Home() {
  const [nasaNew, setNasaNew] = useState({});
  //   const urlType = nasaNew.url.slice(-3);
  //   console.log(urlType);

  const getNasaNew = async () => {
    let nasaNew = await axios.get('http://localhost:5000/');
    setNasaNew(nasaNew.data);
  };

  useEffect(() => {
    (async () => {
      await getNasaNew();
    })();
  }, []);

  return (
    <>
      <h1>NASA News</h1>
      <Card style={{ width: '100%' }}>
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
        <Card.Body>
          <Card.Title>{nasaNew.title}</Card.Title>
          <Card.Text>{nasaNew.description}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default Home;
