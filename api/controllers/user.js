const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(422).json({ error: 'Need username and password' });
  } else {
    const newUser = new User ({ username, password });
    
    newUser
    .save()
    .then(user => {
      res.status(200).json({ message:'User created successfully', user });
    })
    .catch(err => {
      res.json({ error: err });
    })
  }
};

module.exports = {
  createUser
};
