const del = require('../../services/contacts/del');

const deleteContact = async (req, res, _) => {
  const { contactId } = req.params;

  try {
    const result = await del(contactId);

    res.json({
      status: 'success',
      code: 200,
      message: 'Contact deleted',
      data: {
        result,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'error',
      code: 404,
      message: 'Contact with this id not found',
    });
  }
};

module.exports = deleteContact;
