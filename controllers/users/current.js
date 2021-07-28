const current = async (req, res, next) => {
  const { email, subscription } = req.user;

  res.status(200).json({
    status: 'OK',
    code: 200,
    result: {
      email: email,
      subscription: subscription,
    },
  });
};

module.exports = current;
