const jwt = require('jsonwebtoken');
const { mysecret } = require('../../config');
const User = require('../models/userModels');

const login = (req, res) => {
  console.log("Logging in");
  if (!req.body.username || !req.body.password) {
    res.status(422).json({ error: 'Need username and password' });
  } else {
    const username = req.body.username.toString().toLowerCase();
    const password = req.body.password;
    User.findOne({ username }, (err, user) => {
      if (err) {
        res.status(403).json({ error: 'Invalid Username/Password' });
        return;
      }
      if (user === null) {
        res.status(422).json({ error: 'No user with that username in our DB' });
        return;
      }
      console.log("before passwordcheck");
      user.checkPassword(password, (nonMatch, hashMatch) => {
        if (nonMatch !== null) {
          res.status(422).json({ error: 'passwords dont match' });
          return;
        }
        if (hashMatch) {
          const payload = {
            username: user.username
          };
          const token = jwt.sign(payload, mysecret);
          res.json({ token });
        }
      });
    });
  }
};

module.exports = {
  login
};
