const jwt = require('jsonwebtoken');
require('dotenv').config();

const { getByEmail, updateById } = require('../../services/users');

const login = async (req, res, next) => {
  const { email, password } = req.query;

  try {
    const user = await getByEmail({ email });

    if (!user || !user.comparePassword(password)) {
      res.status(401).json({
        status: 'Unauthorized',
        code: 401,
        message: 'Email or password is wrong',
      });
      return;
    }

    const { SECRET_KEY } = process.env;
    const payload = {
      id: user._id,
    };
    const token = jwt.sign(payload, SECRET_KEY);

    await updateById(user._id, { token });

    res.status(200).json({
      status: 'OK',
      code: 200,
      result: {
        token: token,
        user: {
          email: user.email,
          subscription: user.subscription,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = login;
