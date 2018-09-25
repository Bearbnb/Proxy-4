const express = require('express');
var proxy = require('express-http-proxy');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

const descriptionsServer = "http://bearbnbdescription-env1.b4nkf45hnu.us-west-2.elasticbeanstalk.com/"
const photosServer = "http://eastphotos-env.fdvpa3pswm.us-east-1.elasticbeanstalk.com/"
const bookingsServer = "http://bearbnbbooking-env.bz7dpdnrpj.us-west-1.elasticbeanstalk.com/"
const reviewsServer = "http://bearbnbreviews-env.rppvejjmcc.us-east-1.elasticbeanstalk.com/"


app.use('/:id', express.static(path.join(__dirname, 'public')));

app.get('/reviews/:id', proxy(reviewsServer))

app.get('/photos/:id', proxy(photosServer));

app.get('/descriptions/:id', proxy(descriptionsServer));

app.get('/bookings/:id', proxy(bookingsServer));

app.get('/bookings/:id/check_in/:date', proxy(bookingsServer));
app.post('/bookings/:id/check_in/:date/check_out/:date', proxy(bookingsServer));

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
