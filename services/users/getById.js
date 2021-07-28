const user = require('../../model/shemas/userShema');

const getById = userId => user.findById(userId);

module.exports = getById;
