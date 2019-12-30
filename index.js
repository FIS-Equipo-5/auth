// const app = require('./server.js');
const dbConnect = require('./db');
const dbConfig = require('./config/database.config.js');

const express = require('express');
const bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');

// create express app
const app = express();

// jwt secret token
app.set('secretKey', 'authServiceApi'); 

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// Require User routes
require('./app/routes/user.routes.js')(app);

module.exports = app;


console.log("Starting API server at " + dbConfig.port);

dbConnect().then(
    () => {
        console.log("BD is located in " + dbConfig.url + ' ' + dbConfig.port);
        app.listen(dbConfig.port, async () => {
            console.log("Saving User");
             const User = require('./app/models/user.model');
             user = new User({ name: 'user', email: 'user@email.com', password: 'password' });
            console.log("User const: ", user);
            //let response = await user.save()
            //console.log("Added user " + response);
        });
        console.log("Server is listening on " + dbConfig.port);
    },
    err => {
        console.log("Connection error: " + err);
    }
)
