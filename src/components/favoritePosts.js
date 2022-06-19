import React from 'react';
import { Carousel, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function favoritePosts(props) {
  let posts = props.posts;
  return (
    <>
      <h5>Favorites Carousel</h5>
      <hr />
      <Carousel fade interval={1000}>
        {posts.length !== 0 &&
          posts.map((p, i) => {
            return (
              <Carousel.Item key={i} style={{ height: '35rem' }}>
                <Nav.Link as={Link} to={`/favorite/${p._id}`}>
                  <img
                    className='d-block w-100'
                    src={p.url}
                    alt='First slide'
                    style={{ height: '35rem' }}
                  />
                </Nav.Link>
                <Carousel.Caption>
                  <h3>{p.title}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
      </Carousel>
    </>
  );
}

export default favoritePosts;
