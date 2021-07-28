const user = require('../../model/shemas/userShema');

const getByEmail = filter => user.findOne(filter);

module.exports = getByEmail;
