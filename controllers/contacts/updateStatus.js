const updateStatus = require('../../services/contacts/updateStatus');

const updateStatusContact = async (req, res, _) => {
  const body = req.query;
  const { contactId } = req.params;

  try {
    const arr = Object.keys(body);

    if (!arr.includes('favorite')) {
      res.status(400).json({
        status: 'error',
        code: 400,
        message: 'Missing field favorite',
      });
      return;
    }

    const result = await updateStatus(contactId);

    if (!result) {
      throw Error;
    }

    res.json({
      status: 'success',
      code: 200,
      message: 'Contact status changed',
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

module.exports = updateStatusContact;
