const User = require('../../model/shemas/userShema');
const gravatar = require('gravatar');

const add = ({ email, password, verifyToken }) => {
  const avatarURL = gravatar.url(email);
  const newUser = new User({ email, avatarURL: avatarURL, verifyToken });
  newUser.setPassword(password);

  return newUser.save();
};

module.exports = add;
