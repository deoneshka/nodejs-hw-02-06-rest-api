const user = require('../../model/shemas/userShema');

const getOne = filter => user.findOne(filter);

module.exports = getOne;
