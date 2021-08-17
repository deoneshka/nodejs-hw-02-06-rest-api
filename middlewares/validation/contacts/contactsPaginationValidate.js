const Joi = require('joi');

const contactSchema = Joi.object({
  page: Joi.number(),
  limit: Joi.number(),
  favorite: Joi.boolean(),
});

const contactsPaginationValidate = (req, res, next) => {
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

module.exports = contactsPaginationValidate;
