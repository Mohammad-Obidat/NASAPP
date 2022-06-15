require('dotenv').config();
const express = require('express');
const axios = require('../../../node_modules/axios');
const nasaNew = require('../models/nasaNew.js');
const saveNasaNew = require('../config/db.js');
const router = express.Router();

const getNasaNew = async () => {
  const URL = `https://api.nasa.gov/planetary/apod?api_key=Ea2g2BTcnWO8dWrG8tIv2qHzivavkkds2rVuuaaJ`;
  const nasaNew = await axios.get(URL);
  return {
    title: nasaNew.data.title,
    description: nasaNew.data.explanation,
    url: nasaNew.data.url,
  };
};

router.get('/', async (req, res) => {
  try {
    const nasaNew = await getNasaNew();
    res.status(200).send(nasaNew);
  } catch (error) {
    res.sendStatus(401);
  }
});

router.post('/nasa/news', async (req, res) => {
  let nasaNew = req.body;
  try {
    await saveNasaNew(nasaNew);
    res.status(201).send(nasaNew);
  } catch (error) {
    res.sendStatus(400);
  }
});

module.exports = router;
