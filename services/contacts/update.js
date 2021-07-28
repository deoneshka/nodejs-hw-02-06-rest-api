const contact = require('../../model/shemas/contactShema');

const update = async (contactId, body) => {
  try {
    const result = await contact.findByIdAndUpdate(contactId, body);

    return result;
  } catch (error) {
    if (error.message.includes('Cast to ObjectId failed')) {
      return null;
    }

    throw error;
  }
};

module.exports = update;
