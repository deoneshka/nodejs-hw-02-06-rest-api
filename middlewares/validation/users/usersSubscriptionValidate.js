const Joi = require('joi');

const contactSchema = Joi.object({
  subscription: Joi.any().valid('starter', 'pro', 'business').required(),
});

const usersSubscriptionValidate = (req, res, next) => {
  const { error } = contactSchema.validate(req.query);

  if (error) {
    res.status(400).json({
      status: 'error',
      code: 400,
      message: `${error.message}`,
    });
    return;
  }

  next();
};

module.exports = usersSubscriptionValidate;
