const contact = require('../../model/shemas/contactShema');
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

const add = body => {
  const { error } = contactSchema.validate(body);

  if (error) {
    return null;
  }

  return contact.create(body);
};

module.exports = add;
