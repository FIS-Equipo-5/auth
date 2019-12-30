const app = require('./server.js');
const dbConnect = require('./db');
const dbConfig = require('./config/database.config.js');


console.log("Starting API server at "+dbConfig.port);

dbConnect().then(
    () => {
        app.listen(dbConfig.port);
        console.log("Server is listening on port " + dbConfig.port);
        const User = require('./app/models/user.model');
        console.log("Saving User");
        user = new User({ name: 'user', email: 'user@email.com', password: 'password' });
        let response = user.save()
        console.log("Added user " + response);
    },
    err => {
        console.log("Connection error: "+err);
    }
)