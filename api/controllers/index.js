const { getAllJokes } = require('./jokes');
const { login } = require('./login');
const { createUser } = require('./user');
const { logout } = require('./logout');

module.exports = {
  getAllJokes,
  login,
  createUser,
  logout
};
