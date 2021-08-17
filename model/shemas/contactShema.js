const { Schema, model } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const contactSchema = Schema({
  name: {
    type: String,
    required: [true, 'Set name for contact'],
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
});

contactSchema.plugin(mongoosePaginate);

module.exports = model('contact', contactSchema);
