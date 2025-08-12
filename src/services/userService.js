const userRepository = require('../repositories/userRepository');

exports.createUser = (user) => {
  return userRepository.createUser(user);
};

exports.getUserByEmail = (email) => {
  return userRepository.getUserByEmail(email);
};