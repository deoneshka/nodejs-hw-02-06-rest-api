const express = require('express');
const router = express.Router();

const {
  contactsAddValidate,
  contactsUpdateValidate,
  contactsUpdateStatusValidate,
} = require('../../middleware/validation/contacts');

const {
  getAll,
  getById,
  add,
  del,
  update,
  updateStatus,
} = require('../../controllers/contacts');

router.get('/', getAll);

router.get('/:contactId', getById);

router.post('/', express.json(), contactsAddValidate, add);

router.delete('/:contactId', del);

router.put('/:contactId', express.json(), contactsUpdateValidate, update);

router.patch(
  '/:contactId',
  express.json(),
  contactsUpdateStatusValidate,
  updateStatus,
);

module.exports = router;
