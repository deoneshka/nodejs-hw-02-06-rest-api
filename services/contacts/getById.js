const contact = require('../../model/shemas/contactShema');

const getById = contactId => {
  return contact.findOne(contactId);
};

module.exports = getById;
