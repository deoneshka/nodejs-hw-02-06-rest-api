const contact = require('../../model/shemas/contactShema');

const add = body => contact.create(body);

module.exports = add;
