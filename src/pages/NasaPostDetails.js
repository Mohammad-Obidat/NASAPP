import React from 'react';

function NasaPostDetails(props) {
  const match = props.match;
  const postId = match.params.movieId;

  return <>id = {postId}</>;
}

export default NasaPostDetails;
