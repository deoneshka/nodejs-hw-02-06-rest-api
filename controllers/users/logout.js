const { updateById } = require('../../services/users');

const logout = async (req, res, next) => {
  const userId = req.user._id;

  try {
    const updatedUser = await updateById(userId, { token: null });

    if (!updatedUser) {
      res.status(401).json({
        status: 'Unauthorized',
        code: 401,
        message: 'Not authorized',
      });
      return;
    }

    res.status(204).json({
      status: 'No content',
      code: 204,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = logout;
