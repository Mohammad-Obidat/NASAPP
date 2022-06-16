import React from 'react';
import { Card } from 'react-bootstrap';

function postCard(props) {
  let post = props.post;
  return (
    <>
      <Card style={{ width: '100%' }}>
        {post.mediaType === 'image' ? (
          <Card.Img
            variant='top'
            src={post.url}
            alt='cardImage'
            style={{
              width: '100%',
              height: '25rem',
              display: 'block',
              margin: 'auto',
            }}
          />
        ) : (
          <video src={post.url} style={{ height: '25rem' }} controls>
            Your browser does not support the video tag.
          </video>
        )}

        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.description}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default postCard;
