const express = require('express');
const router = express.Router();
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

router.post('/', express.json(), add);

router.delete('/:contactId', del);

router.put('/:contactId', express.json(), update);

router.patch('/:contactId', express.json(), updateStatus);

module.exports = router;
