const update = require('../../services/contacts/update');

const updateContact = async (req, res, _) => {
  const body = req.query;
  const { contactId } = req.params;

  try {
    if (Object.keys(body).length === 0) {
      res.status(400).json({
        status: 'error',
        code: 400,
        message: 'You have not indicated what needs to be changed',
      });
      return;
    }

    const result = await update(contactId, body);

    if (!result) {
      res.status(400).json({
        status: 'error',
        code: 400,
        message: 'Validation error.',
      });
    }

    res.json({
      status: 'success',
      code: 200,
      message: 'Contact updated',
      result,
    });
  } catch (error) {
    res.status(404).json({
      status: 'error',
      code: 404,
      message: 'Contact with this id not found',
    });
  }
};

module.exports = updateContact;
