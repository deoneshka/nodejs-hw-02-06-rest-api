const { getOne } = require('../../services/users');
const { sendMail, verifyMail } = require('../../helpers/users/sendMail');

const resending = async (req, res, next) => {
  const { email } = req.query;

  try {
    const user = await getOne({ email });

    if (!user) {
      res.status(401).json({
        status: 'Unauthorized',
        code: 401,
        message: 'Not authorized',
      });

      return;
    }

    if (user.verify) {
      res.status(400).json({
        status: 'Bad Request',
        code: 400,
        message: 'Verification has already been passed',
      });
      return;
    }

    const mail = await verifyMail(email, user.verifyToken);
    await sendMail(mail);

    res.status(200).json({
      status: 'OK',
      code: 200,
      message: 'Verification email sent',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = resending;
