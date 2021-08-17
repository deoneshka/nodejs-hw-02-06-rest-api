const signup = require('./signup');
const login = require('./login');
const logout = require('./logout');
const current = require('./current');
const updateAvatar = require('./updateAvatar');
const verify = require('./verify');
const resending = require('./resending');
const updateSubscription = require('./updateSubscription');

module.exports = {
  signup,
  login,
  logout,
  current,
  updateAvatar,
  verify,
  resending,
  updateSubscription,
};
