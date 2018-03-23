const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const SALT_ROUNDS = 11;

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  }
});

UserSchema.pre('save', function(next) {
  console.log('hitting userschema pre middleware');
  bcrypt.hash(this.password, SALT_ROUNDS, (err, hash) => {
    console.log('pw', this.password);
    if(err) throw new Error(err);
    this.password = hash;
    next();
  })
});

UserSchema.methods.checkPassword = function(plainTextPW, callBack) {
  bcrypt.compare(plainTextPW, this.password, (err, match) => {
    if (err) return callBack(err);
    callBack(null, match);
  })
};

module.exports = mongoose.model('User', UserSchema);
