const contact = require('../../model/shemas/contactShema');

const updateStatus = async contactId => {
  try {
    const objContact = await contact.findById(contactId);
    objContact.favorite = !objContact.favorite;

    const result = await contact.findByIdAndUpdate(contactId, objContact, {
      new: true,
    });

    return result;
  } catch (error) {
    return null;
  }
};

module.exports = updateStatus;
