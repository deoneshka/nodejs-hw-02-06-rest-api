const getAll = require('../../services/contacts/getAll');

const getAllContacts = async (req, res, next) => {
  const { page, limit, favorite } = req.query;

  try {
    const result = await getAll(page, limit, favorite);

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

module.exports = getAllContacts;
