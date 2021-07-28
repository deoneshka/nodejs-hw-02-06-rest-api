const { getByEmail, add } = require('../../services/users');

const signup = async (req, res, next) => {
  const { email, password } = req.query;

  try {
    const user = await getByEmail({ email });

    if (user) {
      res.status(409).json({
        status: 'conflict',
        code: 409,
        message: 'Email in use',
      });
      return;
    }

    await add({ email, password });

    const result = await getByEmail({ email });

    res.status(201).json({
      status: 'created',
      code: 201,
      result: {
        email: result.email,
        subscription: result.subscription,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = signup;
