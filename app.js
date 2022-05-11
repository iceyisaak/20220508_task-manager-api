const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
const notFound = require('./middleware/not-found');

require('dotenv').config();

// Middleware
app.use(express.static('./public'));
app.use(express.json());

// Route
app.use('/api/v1/tasks', tasks);
app.use(notFound);

const PORT = 3000;

// app.listen(PORT, console.log(`Server is listening on port ${PORT}...`));

const start = async () => {


  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(PORT, console.log(`Server is listening on port ${PORT}...`));
  } catch (err) {
    console.log('Error starting server: ', err);
  }

};

start();