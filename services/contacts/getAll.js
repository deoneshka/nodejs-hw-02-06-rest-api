const contact = require('../../model/shemas/contactShema');

const getAll = async (page = 1, limit = 20, favorite) => {
  const options = {
    page,
    limit,
  };

  if (favorite !== undefined) {
    return await contact.paginate({ favorite }, options, function (_, result) {
      return result.docs;
    });
  }

  return await contact.paginate({}, options, function (_, result) {
    return result.docs;
  });
};

module.exports = getAll;
