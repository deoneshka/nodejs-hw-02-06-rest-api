const add = require('../../services/contacts/add');

const addContact = async (req, res, next) => {
  const body = req.query;

  try {
    const result = await add(body);

    res.status(201).json({
      status: 'success',
      code: 201,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = addContact;
