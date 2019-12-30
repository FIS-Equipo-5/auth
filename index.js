const app = require('./server.js');
const dbConnect = require('./db');
const dbConfig = require('./config/database.config.js');


console.log("Starting API server at " + dbConfig.port);

dbConnect().then(
    () => {
        console.log("BD is located in " + dbConfig.url + ' ' + dbConfig.port);
        app.listen(dbConfig.port, async () => {
            console.log("Saving User");
            const User = require('./app/models/user.model');
            user = new User({ name: 'user', email: 'user@email.com', password: 'password' });
            let response = await user.save()
            console.log("Added user " + response);
        });
        console.log("Server is listening on " + dbConfig.port);
    },
    err => {
        console.log("Connection error: " + err);
    }
)