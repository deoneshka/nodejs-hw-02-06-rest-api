const { updateById, getById } = require('../../services/users');

const updateSubscription = async (req, res, next) => {
  const userId = req.user._id;
  const { subscription } = req.query;

  try {
    const user = await getById(userId);

    if (!user) {
      res.status(401).json({
        status: 'Unauthorized',
        code: 401,
        message: 'Not authorized',
      });

      return;
    }

    const updatedUser = await updateById(userId, {
      subscription,
    });

    res.status(200).json({
      status: 'OK',
      code: 200,
      subscription: updatedUser.subscription,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateSubscription;
