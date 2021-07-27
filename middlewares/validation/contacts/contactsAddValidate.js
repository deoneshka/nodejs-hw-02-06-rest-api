const Joi = require('joi');

const contactSchema = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net'] },
    })
    .required(),
  phone: Joi.number().min(6).required(),
});

const contactsAddValidate = (req, res, next) => {
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

module.exports = contactsAddValidate;
