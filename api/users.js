const express = require('express');
const router = express.Router();

const { signup, login, logout, current } = require('../controllers/users');
const usersValidate = require('../middlewares/validation/users');

const authenticate = require('../middlewares/userAuth');

router.post('/signup', express.json(), usersValidate, signup);

router.post('/login', express.json(), usersValidate, login);

router.get('/logout', authenticate, logout);

router.get('/current', authenticate, current);

module.exports = router;
