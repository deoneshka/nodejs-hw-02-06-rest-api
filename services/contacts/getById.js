const contact = require('../../model/shemas/contactShema');

const getById = async contactId => {
  try {
    const result = await contact.findOne(contactId);
    return result;
  } catch (error) {
    if (error.message.includes('Cast to ObjectId failed')) {
      return null;
    }
    throw error;
  }
};

module.exports = getById;
