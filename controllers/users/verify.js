const { getOne, updateById } = require('../../services/users');

const verify = async (req, res, next) => {
  const { verifyToken } = req.params;
  console.log(verifyToken);
  try {
    const user = await getOne({ verifyToken });

    if (!user) {
      res.status(404).json({
        status: 'Not found',
        code: 404,
        message: 'User not found',
      });
      return;
    }

    await updateById(user._id, {
      verify: true,
      verifyToken: null,
    });

    res.status(200).json({
      status: 'OK',
      code: 200,
      message: 'Verification successful',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = verify;
