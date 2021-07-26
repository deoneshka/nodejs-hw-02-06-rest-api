const contact = require('../../model/shemas/contactShema');

const del = async contactId => {
  try {
    const result = await contact.findByIdAndDelete(contactId);
    return result;
  } catch (error) {
    if (error.message.includes('Cast to ObjectId failed')) {
      return null;
    }
    throw error;
  }
};

module.exports = del;
