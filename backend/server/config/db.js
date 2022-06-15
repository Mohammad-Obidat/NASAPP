const nasaNew = require('../models/nasaNew.js');

const saveNasaNew = async (news) => {
  const t = new nasaNew(news);
  await t.save();
};

module.exports = saveNasaNew;
