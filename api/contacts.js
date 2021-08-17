const express = require('express');
const router = express.Router();

const {
  contactsAddValidate,
  contactsUpdateValidate,
  contactsUpdateStatusValidate,
  contactsPaginationValidate,
} = require('../middlewares/validation/contacts');

const {
  getAll,
  getById,
  add,
  del,
  update,
  updateStatus,
} = require('../controllers/contacts');

router.get('/', contactsPaginationValidate, getAll);

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
