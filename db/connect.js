const mongoose = require('mongoose');

const connectDB = (url) => {
  // try {
  mongoose.connect(url);
  console.log('Connected to DB');
  // } catch (err) {
  // console.log('Error Connecting to DB: ', err);
  // }
};

module.exports = connectDB;

