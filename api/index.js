const express = require('express');
const app = express();
const { videos, user } = require('./fakeData');
app.use(express.json());

app.get('/api/user/1', (req, res) => {
  setTimeout(() => {
    res.json(user);
  }, 3000);
});

app.get('/api/videos/1', (req, res) => {
  setTimeout(() => {
    res.json(videos);
  }, 5000);
});

app.listen(8800, () => {
  console.log('Backend server is running!');
});
