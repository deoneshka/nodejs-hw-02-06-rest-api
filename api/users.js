const express = require('express');
const router = express.Router();

const {
  signup,
  login,
  logout,
  current,
  updateAvatar,
  verify,
  resending,
  updateSubscription,
} = require('../controllers/users');

const {
  usersValidate,
  usersEmailValidate,
  usersSubscriptionValidate,
} = require('../middlewares/validation/users');

const authenticate = require('../middlewares/userAuth');

const upload = require('../middlewares/upload');

router.post('/signup', express.json(), usersValidate, signup);

router.post('/login', express.json(), usersValidate, login);

router.get('/logout', authenticate, logout);

router.get('/current', authenticate, current);

router.get('/verify/:verifyToken', verify);

router.post('/verify', usersEmailValidate, resending);

router.patch('/avatars', authenticate, upload.single('avatar'), updateAvatar);

router.patch('/', authenticate, usersSubscriptionValidate, updateSubscription);

module.exports = router;
