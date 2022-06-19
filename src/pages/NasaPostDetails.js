import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import PostCard from '../components/postCard.js';

function NasaPostDetails(props) {
  const match = props.match;
  const postId = match.params.postId;

  const [post, setPost] = useState({});

  const getPostById = async (postID) => {
    let post = await axios.get(`http://localhost:5000/favorite/${postID}`);
    setPost(post.data[0]);
  };

  useEffect(() => {
    (async () => {
      await getPostById(postId);
    })();
  }, [postId]);

  return (
    <>
      <PostCard post={post} />
    </>
  );
}

export default NasaPostDetails;
