module.exports = (app) => {

    const BASE_API_PATH = "/api/v1"
    const userController = require('../controllers/user.controller.js');

    app.get('/',(request, response) => response.send('Welcome to API auth!'));
    app.post(BASE_API_PATH + '/users/register', userController.create);
    app.post(BASE_API_PATH + '/users/authenticate', userController.authenticate);
}