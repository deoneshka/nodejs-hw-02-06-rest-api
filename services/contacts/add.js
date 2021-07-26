const contact = require('../../model/shemas/contactShema');

const add = body => {
  return contact.create(body);
};

module.exports = add;
