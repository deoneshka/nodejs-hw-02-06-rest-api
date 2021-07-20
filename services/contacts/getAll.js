const contact = require('../../model/shemas/contactShema');

const getAll = () => {
  return contact.find({});
};

module.exports = getAll;
