const express = require('express');
const app = express();
const path = require('path');

/*CORS stands for Cross Origin Resource Sharing and allows modern web browsers to be able to send AJAX requests and receive HTTP responses for resource from other domains other that the domain serving the client side application.*/
const cors = require('cors');

//Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
const bodyParser = require('body-parser');

// Our error handler
const errorHandler = require('./_helpers/error-handler');

// const publicPath = path.join(__dirname, '../CanICookIt_angular/dist/CanICookIt');
const publicPath = path.join(__dirname, 'public/CanICookIt');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/', express.static(publicPath));
app.use('/user', require('./routes/user.router'));
app.use('/recipe', require('./routes/recipe.router'));
// app.use('/ingredient', require('./routes/ingredient.router'));
app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 3030;
app.listen(port, function () {
  console.log('Server listening on port ' + port);
});

module.exports = app;
