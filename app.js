const express = require('express');
const app = express();


app.get('/hi', (req, res) => {
  res.send('Task Manager <App></App>');
});

const PORT = 3000;

app.listen(PORT, console.log(`Server is listening on port ${PORT}...`));