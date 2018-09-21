const express = require('express');
var proxy = require('express-http-proxy');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

const descriptionsServer = "http://localhost:3001/"
const photosServer = "http://localhost:3002/"
const bookingsServer = "http://localhost:3003/"
const reviewsServer = "http://localhost:3004/"


app.use('/:id', express.static(path.join(__dirname, 'public')));

app.get('/reviews/:id', proxy(reviewsServer))

app.get('/photos/:id', proxy(photosServer));

app.get('/descriptions/:id', proxy(descriptionsServer));

app.get('/bookings/:id', proxy(bookingsServer));

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
