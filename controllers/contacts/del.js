const del = require('../../services/contacts/del');

const deleteContact = async (req, res, next) => {
  const { contactId } = req.params;

  try {
    const result = await del(contactId);

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
      message: 'Contact deleted',
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteContact;
