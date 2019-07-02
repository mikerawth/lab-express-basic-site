const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Server is up and running!')
});

app.get('/', (request, response, next) => {
  response.sendFile(__dirname + "/views/index.html")
});

app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + "/views/about.html")
});

app.get('/gallery', (request, response, next) => {
  response.sendFile(__dirname + "/views/gallery.html")
});

