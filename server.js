const express = require('express');
const bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');

// // create express app
// const app = express();

// // jwt secret token
// app.set('secretKey', 'authServiceApi'); 

// // parse requests of content-type - application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }))

// // parse requests of content-type - application/json
// app.use(bodyParser.json())

// // Require User routes
// require('./app/routes/user.routes.js')(app);

// module.exports = app;