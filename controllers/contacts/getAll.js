const getAll = require('../../services/contacts/getAll');

const getAllContacts = async (_, res, next) => {
  try {
    const result = await getAll();

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
