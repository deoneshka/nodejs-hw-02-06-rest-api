const contact = require('../../model/shemas/contactShema');

const del = contactId => {
  return contact.findByIdAndDelete(contactId);
};

module.exports = del;
