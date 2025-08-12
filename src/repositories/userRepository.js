const User = require('../models/User');

exports.createUser = async (userData) => {
  const user = await User.create(userData);
  return user;
};

exports.getUserByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};