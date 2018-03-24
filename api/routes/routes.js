const { authenticate } = require('../utils/middlewares');

const { getAllJokes, createUser, login, logout } = require('../controllers');

module.exports = server => {
  server.get('/api/jokes', authenticate, getAllJokes);
  server.route('/api/users').post(createUser);
  server.route('/api/login').post(login);
  server.route('/api/logout').post(logout);
  
};
