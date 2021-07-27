const User = require('../../model/shemas/userShema');

const add = ({ email, password }) => {
  const newUser = new User({ email });
  newUser.setPassword(password);

  return newUser.save();
};

module.exports = add;
