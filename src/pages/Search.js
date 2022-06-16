import React, { useState } from 'react';
import axios from 'axios';
import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap';
import ExpendableText from '../components/ExpendableText';
import '../App.css';

function Search() {
  const [searchNasaNews, setSearchNasaNews] = useState([]);
  const [searchText, setSearchText] = useState('');

  const handleInput = (event) => {
    let inputText = event.target.value;
    setSearchText(inputText);
  };

  const getNasaNewsBySearch = async () => {
    const searchResult = await axios.get(
      `http://localhost:5000/search/${searchText}`
    );

    setSearchNasaNews(searchResult.data);
    setSearchText('');
  };

  const addToFavorite = async (nasaPost) => {
    await axios.post(`http://localhost:5000/favorite`, nasaPost);
  };

  return (
    <>
      <InputGroup className='mb-3' size='lg' hasValidation={true}>
        <Button
          variant='dark'
          id='button-addon1'
          type='submit'
          onClick={getNasaNewsBySearch}
        >
          Search
        </Button>
        <Form.Control
          type='text'
          placeholder='Enter NASA News you are looking for:'
          aria-label='Example text with button addon'
          aria-describedby='basic-addon1'
          onChange={handleInput}
          value={searchText}
        />
      </InputGroup>
      <hr />

      <Row xs={1} md={2} lg={3} className='g-4'>
        {searchNasaNews.map((n, i) => {
          return (
            <Col key={i}>
              <Card style={{ width: '28rem' }}>
                {n.mediaType === 'image' ? (
                  <Card.Img
                    variant='top'
                    src={n.url}
                    style={{ height: '18rem' }}
                  />
                ) : (
                  <video src={n.url} style={{ height: '18rem' }} controls>
                    Your browser does not support the video tag.
                  </video>
                )}
                <Card.Body>
                  <Card.Title>{n.title}</Card.Title>
                  <ExpendableText
                    absoluteMax={n.description.length}
                    maxHeight={95}
                  >
                    <Card.Text
                      dangerouslySetInnerHTML={{ __html: n.description }}
                    ></Card.Text>
                  </ExpendableText>
                  <Button
                    onClick={() => addToFavorite(n)}
                    className='cardBtn'
                    variant='dark'
                  >
                    Add to Favorite
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default Search;
