const Joi = require('joi');

const contactSchema = Joi.object({
  favorite: Joi.required(),
});

const contactsUpdateStatusValidate = (req, res, next) => {
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

module.exports = contactsUpdateStatusValidate;
