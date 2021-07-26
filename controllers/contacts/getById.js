const getById = require('../../services/contacts/getById');

const getContactById = async (req, res, next) => {
  const { contactId } = req.params;

  try {
    const result = await getById({ _id: contactId });

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
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getContactById;
