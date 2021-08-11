const { v4: uuidv4 } = require('uuid');
const { getOne, add } = require('../../services/users');
const { sendMail, verifyMail } = require('../../helpers/users/sendMail');

const signup = async (req, res, next) => {
  const { email, password } = req.query;

  try {
    const user = await getOne({ email });

    if (user) {
      res.status(409).json({
        status: 'conflict',
        code: 409,
        message: 'Email in use',
      });
      return;
    }

    const verifyToken = uuidv4();
    await add({ email, password, verifyToken });

    // const mail = {
    //   to: email,
    //   subject: 'Confirm your email',
    //   text: `<a href=http://localhost:3000/api/users/verify/${verifyToken}>Click to confirm your email</a>`,
    // };
    const mail = await verifyMail(email, verifyToken);
    await sendMail(mail);

    const result = await getOne({ email });

    res.status(201).json({
      status: 'created',
      code: 201,
      message:
        'An email has been sent to you. Please confirm your email address.',
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
