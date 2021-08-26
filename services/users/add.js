const User = require('../../model/shemas/userShema');

const add = ({ email, password, verifyToken }) => {
  const newUser = new User({ email, verifyToken });
  newUser.setPassword(password);
  newUser.setAvatarURL(email);

  return newUser.save();
};

module.exports = add;
