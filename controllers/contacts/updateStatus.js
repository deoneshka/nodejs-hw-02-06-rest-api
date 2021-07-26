const updateStatus = require('../../services/contacts/updateStatus');

const updateStatusContact = async (req, res, next) => {
  const { contactId } = req.params;

  try {
    const result = await updateStatus(contactId);

    if (!result) {
      res.status(404).json({
        status: 'error',
        code: 404,
        message: 'Contact with this id not found',
      });
      return;
    }

    res.json({
      status: 'success',
      code: 200,
      message: 'Contact status changed',
      result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateStatusContact;
