const update = require('../../services/contacts/update');

const updateContact = async (req, res, next) => {
  const body = req.query;
  const { contactId } = req.params;

  try {
    const result = await update(contactId, body);

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
      message: 'Contact updated',
      result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateContact;
