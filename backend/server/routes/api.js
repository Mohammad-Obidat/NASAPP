const express = require('express');
const axios = require('../../../node_modules/axios');
const nasaNew = require('../models/nasaNew.js');
const saveNasaNew = require('../config/db.js');
const router = express.Router();

const getNasaNew = async () => {
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
    const nasaNew = await getNasaNew();
    res.status(200).send(nasaNew);
  } catch (error) {
    res.sendStatus(400);
  }
});

router.get('/search/:nasaNew', async (req, res) => {
  let nasaNewParam = req.params.nasaNew;
  try {
    const nasaNew = await getNasaNewsBySearch(nasaNewParam);
    res.status(200).send(nasaNew);
  } catch (error) {
    res.sendStatus(400);
  }
});

module.exports = router;
