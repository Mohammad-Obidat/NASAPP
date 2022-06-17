const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nasaNewsSchema = new Schema({
  title: String,
  description: String,
  url: String,
  mediaType: String,
});

const nasaNew = mongoose.model('nasaNew', nasaNewsSchema);
module.exports = nasaNew;
