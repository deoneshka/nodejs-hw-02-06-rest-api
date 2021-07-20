const contact = require('../../model/shemas/contactShema');
const Joi = require('joi');

const contactSchema = Joi.object({
  name: Joi.string().min(2),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ['com', 'net'] },
  }),
  phone: Joi.number().min(6),
});

const update = (contactId, body) => {
  const { error } = contactSchema.validate(body);

  if (error) {
    return null;
  }

  return contact.findByIdAndUpdate(contactId, body, {
    new: true,
  });
};

module.exports = update;
