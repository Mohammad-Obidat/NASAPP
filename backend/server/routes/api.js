const express = require('express');
const axios = require('../../../node_modules/axios');
var ObjectId = require('mongodb').ObjectId;
const nasaModel = require('../models/nasaNew.js');
const saveNasaNews = require('../config/db.js');
const router = express.Router();

const getNasaNewPerDay = async () => {
  const URL = `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`;
  const nasaNew = await axios.get(URL);
  return {
    title: nasaNew.data.title,
    description: nasaNew.data.explanation,
    url: nasaNew.data.url,
    mediaType: nasaNew.data.media_type,
  };
};

const getNasaNewsBySearch = async (nasaNew) => {
  const SEARCH_URL = `https://images-api.nasa.gov/search?q=${nasaNew}`;
  const searchNasaNews = await axios.get(SEARCH_URL);

  const formatedItems = searchNasaNews.data.collection.items.map((i) => {
    return {
      title: i.data[0].title,
      description: i.data[0].description,
      url: i.links && i.links[0].href,
      mediaType: i.data[0].media_type,
    };
  });

  return formatedItems;
};

router.get('/', async (req, res) => {
  try {
    const nasaNew = await getNasaNewPerDay();
    res.status(200).send(nasaNew);
  } catch (error) {
    res.sendStatus(400);
  }
});

router.get('/search/:nasaPost', async (req, res) => {
  let nasaNewParam = req.params.nasaPost;
  try {
    if (nasaNewParam) {
      const nasaNews = await getNasaNewsBySearch(nasaNewParam);
      res.send(nasaNews);
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    res.sendStatus(404);
  }
});

router.post('/favorite', async (req, res) => {
  let nasaNews = req.body;
  try {
    if (nasaNews) {
      await saveNasaNews(nasaNews);
      res.status(201).send(nasaNews);
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    res.sendStatus(404);
  }
});

router.get('/favorite', async (req, res) => {
  let nasaFavorite = await nasaModel.find({});
  try {
    res.send(nasaFavorite);
  } catch (error) {
    res.sendStatus(404);
  }
});

router.get('/favorite/:postId', async (req, res) => {
  let postId = req.params.postId;
  let o_id = new ObjectId(postId);
  try {
    let post = await nasaModel.find({ _id: o_id });
    res.status(200).send(post);
  } catch (error) {
    res.sendStatus(404);
  }
});

module.exports = router;
